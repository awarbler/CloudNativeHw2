import React from "react";
import "./App.css";// loads the CSS file for styling the app

// define a reusable square component that represents each cell in the tic-tac-toe grid
function Square() { // defines a function component named square
  return ( // returns jsx that renders a button element with the class name "square"
    <button className="square">X</button> //* temporary: show X so we know it renders */
  );
}

// define the board component that renders a 3x3 grid of squares
function Board() { // define the board component that renders a 3x3 grid of squares
  return (
    <div>
      <div className="board-row"> {/* first row of the board */}
        <Square /> {/* square 0 */}
        <Square /> {/* square 1 */}
        <Square /> {/* square 2 */}
      </div>
      <div className="board-row"> {/* second row of the board */}
        <Square /> {/* square 3 */}
        <Square /> {/* square 4 */}
        <Square /> {/* square 5 */}
      </div>
      <div className="board-row"> {/* third row of the board */}
        <Square /> {/* square 6 */}
        <Square /> {/* square 7 */}
        <Square /> {/* square 8 */}
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