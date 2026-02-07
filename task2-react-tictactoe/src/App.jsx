import React from "react";
import "./App.css";// loads the CSS file for styling the app

// define a reusable square component that represents each cell in the tic-tac-toe grid
function Square({value}) { // defines a function component named square
  // define click handler inside of square component
  function handleClick() { // defines a function named handleClick that will be called when the square is clicked
    console.log(`Square ${value} clicked!`); // logs a message to the console indicating which square was clicked
  }
  return ( // returns jsx that renders a button element with the class name "square"
    <button className="square" onClick={handleClick}
    >
      {value} {/* show a value in each square 1-9*/}
      </button>
  );
}

// define the board component that renders a 3x3 grid of squares
function Board() { // define the board component that renders a 3x3 grid of squares
  return (
    <div>
      <div className="board-row"> {/* first row of the board */}
        <Square value={1} /> {/* square 0 */}
        <Square value={2} /> {/* square 1 */}
        <Square value={3} /> {/* square 2 */}
      </div>
      <div className="board-row"> {/* second row of the board */}
        <Square value={4} /> {/* square 3 */}
        <Square value={5} /> {/* square 4 */}
        <Square value={6} /> {/* square 5 */}

      </div>
      <div className="board-row"> {/* third row of the board */}
        <Square value={7} /> {/* square 6 */}
        <Square value={8} /> {/* square 7 */}
        <Square value={9} /> {/* square 8 */}
      </div>

    </div>

  );
}


export default function App() {
  return (
    <div className="app"> {/* top level wrapper */}
      <h1>Tic-Tac-Toe</h1>
      <Board /> {/* renders the board component */}
      </div>
    );
}