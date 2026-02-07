import React, {useState } from "react"; // imports the useState hook from the react library, which allows us to manage state in our functional components


import "./App.css";// loads the CSS file for styling the app

// define a reusable square component that represents each cell in the tic-tac-toe grid
function Square({value, onSquareClick}) { // defines a function component named square
  // create a state for square
  //const [value , setValue] =useState(null); // initializes a state variable named value with an initial value of null, and a function named setValue that can be used to update the value of the state variable
  // define click handler inside of square component
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

  // Click handler for a square at index i
  function handleClick(i) { // i is 0....8
    // if square is filled do nothing
    if (squares[i]){
      return; // prevents overwriting
    }
    // Make a copy of the array do not mutate state 
    const nextSquares = squares.slice();
    // Place an X or O depending on whose turn it is 
    nextSquares[i] = xIsNext ? "X" : "O"; 
    // Update the square state
    setSquares(nextSquares);
    // Switch turns
    setXIsNext(!xIsNext);
  }
  // render 3 rows 3 squares
  return (
    <div> {/* wrapper for the board */}
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

// App renders title and board component
export default function App() {
  return (
    <div className="app"> {/* top level wrapper */}
      <h1>Tic-Tac-Toe</h1>
      <Board /> {/* renders the board component */}
      </div>
    );
}