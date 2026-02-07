import React, {useState } from "react"; // import react and useState
import "./App.css";// loads the CSS file for styling the app

// square is stateless
function Square({value, onSquareClick}) { // defines a function component named square
  return ( // returns jsx that renders a button element with the class name "square"
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value} {/* null "X" , or "O" */}
      </button>
  );
}

// define the board component that renders a 3x3 grid of squares
function Board() { // start of the board component
  const [squares, setSquares] = useState(Array(9).fill(null)); // start all squares as null 
  // state to track whose turn it is
  const [xIsNext, setXIsNext] = useState(true); // true --> X turn False --> o turn
  // Determine winner or null if no winner
  const winner = calculateWinner(squares);

  // Decide what status text to show
  let status; // declares the status string
  if(winner){
    status= "Winner: " + winner; // if there is a winner
  } else {
    status = "Next Player: " + (xIsNext? "X" : "O");
  }
  // Click handler for a square at index i
  function handleClick(i) { // i is 0....8
    // stops game if there is a winner
    if (winner){
      return; // no further moves are alllowed
    }
    // ignore squre if square is filled do nothing
    if (squares[i]){
      return; // prevents overwriting
    }
    // Make a copy of the array do not mutate state 
    const nextSquares = squares.slice();
    // Place an X or O depending on whose turn it is 
    nextSquares[i] = xIsNext ? "X" : "O";
    //
    // Update the square state
    setSquares(nextSquares);
    // Switch turns
    setXIsNext(!xIsNext);
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

// Helper function calculate winner 
function calculateWinner(squares){
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
  for (let i = 0; i <lines.length; i++) { //loop throue each winning line
    const [a, b, c] = lines[i]; // get the three indexes for each line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { 
      return squares[a]; // return x or O as winner 
    }
  }
  return null; // no winner
}
// App renders title and board component
export default function App() {
  return (
    <div className="app"> {/* top level wrapper */}
      <h1>Tic-Tac-Toe</h1>
      <Board /> {/* renders the board component */}
      </div>
    );
}