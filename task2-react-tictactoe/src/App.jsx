import React from "react";
import "./App.css";// loads the CSS file for styling the app

// define a reusable square component that represents each cell in the tic-tac-toe grid
function Square() { // defines a function component named square
  return ( // returns jsx that renders a button element with the class name "square"
    <button className="square">{/* seach squre is a button*/}
      1 {/* STEP 2: every Square will show "1" for now */}
      </button>
  );
}

// define the board component that renders a 3x3 grid of squares
function Board() { // Board renders 9 Squares
  return (
    <div>
      <div className="board-row"> {/* first row */}
        <Square /> {/* square 1 */}
        <Square /> {/* square 2 */}
        <Square /> {/* square 3 */}
      </div>

      <div className="board-row"> {/* second row */}
        <Square /> {/* square 4 */}
        <Square /> {/* square 5 */}
        <Square /> {/* square 6 */}
      </div>

      <div className="board-row"> {/* third row */}
        <Square /> {/* square 7 */}
        <Square /> {/* square 8 */}
        <Square /> {/* square 9 */}
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