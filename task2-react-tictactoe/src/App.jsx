import React, {useState } from "react"; // import react and useState
import "./App.css";// loads the CSS file for styling the app

// square is stateless
function Square({value, onSquareClick}) { // defines a function component named square
  return ( // returns jsx that renders a button element with the class name "square"
    <button className="square" onClick={onSquareClick}>
      {value} {/* null "X" , or "O" */}
      </button>
  );
}

// define the board component that renders a 3x3 grid of squares
function Board({xIsNext, squares, onPlay}) { // start of the board component
  //const [squares, setSquares] = useState(Array(9).fill(null)); // start all squares as null 
  // state to track whose turn it is
  // const [xIsNext, setXIsNext] = useState(true); // true --> X turn False --> o turn
  // Determine winner or null if no winner
  const winner = squares ? calculateWinner(squares) : null; // calculate winner based on current squares
  // Decide what status text to show
  let status; // declares the status string
  if(winner){
    status= "Winner: " + winner; // if there is a winner
  } else {
    status = "Next player: " + (xIsNext? "X" : "O");
  }
  // Click handler for a square at index i
  function handleClick(i) { // i is 0....8
    // stops game if there is a winner
    if (winner){
      return; // no further moves are allowed
    }
    // ignore square if square is filled do nothing
    if (squares[i]){
      return; // prevents overwriting
    }
    // Make a copy of the array do not mutate state
    const nextSquares = squares.slice();
    // Place an X or O depending on whose turn it is
    nextSquares[i] = xIsNext ? "X" : "O";
    // Update the square state
    //setSquares(nextSquares);
    // Switch turns
    //setXIsNext(!xIsNext);
    onPlay(nextSquares); // controller component that will update the state
  }
  // render 3 rows 3 squares
  return (
    <div> {/* wrapper for the board */}
      <div className="status">{status}</div> {/* status text */}

      <div className="board-row"> {/* first row of the board */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> {/* square 0 */}
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} /> {/* square 1 */}
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} /> {/* square 2 */}
      </div>

      <div className="board-row"> {/* second row of the board */}
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} /> {/* square 3 */}
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} /> {/* square 4 */}
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} /> {/* square 5 */}  
      </div>

      <div className="board-row"> {/* third row of the board */}
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} /> {/* square 6 */}
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} /> {/* square 7 */}
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} /> {/* square 8 */}
      </div>
    </div>
  );
}
// replaced app with Game - game is top level component 
// Game is the controller component that manages the state of 
// the game and renders the board
export default function Game() {
  // history store board state after each move
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // currentMove tells us which board in history we are seeing
  const [currentMove, setCurrentMove] = useState(0); // start at 0
  // depends on the move number even=x ood = O
  const xIsNext = currentMove % 2 === 0; // boolean
  // the board we will display
  const currentSquares = history[currentMove]; //square array for this move
  // handlePlay saves  anew move into history
  function handlePlay(nextSquares){ // nextSquare is the new board after a click
    const nextHistory = history.slice(0, currentMove + 1); // discard future moves if we time travel
    nextHistory.push(nextSquares); // append the new board state
    setHistory (nextHistory); // update history state
    setCurrentMove(nextHistory.length -1); // jump to newest ove
    }

    // jumpTo changes which move we are viewing
    function jumpTo(nextMove){ // nextMove = 0 .... history.length-1
      setCurrentMove(nextMove); // time travel update current move 
    }
    // build the list of move buttons
    const moves = history.map((squares, move) => {
      // label for the button
      const description = move === 0 ? "Go to game start" : "Go to move #" + move; 
      return (
        <li key={move}> {/* move index as key is ok here */}
          <button onClick={() => jumpTo(move)}>{description}</button> {/* button to jump to this move */}
        </li>
      );
    });
    // render board and move list 
    return (
    <div className="game"> 
      <div className="game-board">
        <h1>Tic-Tac-Toe</h1>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/> {/* renders the board component */}
        </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
    );
}

// Helper function calculate winner 
function calculateWinner(squares){
  if (!squares) return null; // if squares is null or undefined return null
  // all possible winning lines(3 in a row)
  const lines = [
    [0,1,2], // top row
    [3,4,5], // middle row
    [6,7,8], // bottom row
    [0,3,6], // left column
    [1,4,7], // middle column
    [2,5,8], // right column
    [0,4,8], // diagonal top-left to bottom-right
    [2,4,6]  // diagonal top-right to bottom-left
  ];
  // check each line to see if there is a winner 
  for (let i = 0; i <lines.length; i++) { //loop thru each winning line
    const [a, b, c] = lines[i]; // get the three indexes for each line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { 
      return squares[a]; // return x or O as winner 
    }
  }
  return null; // no winner
}