import React, {useState } from "react"; // imports the useState hook from the react library, which allows us to manage state in our functional components


import "./App.css";// loads the CSS file for styling the app

// define a reusable square component that represents each cell in the tic-tac-toe grid
function Square() { // defines a function component named square
  // create a state for square
  const [value , setValue] =useState(null); // initializes a state variable named value with an initial value of null, and a function named setValue that can be used to update the value of the state variable
  // define click handler inside of square component
  function handleClick() { // defines a function named handleClick that will be called when the square is clicked
    setValue("X"); // updates the value of the state variable to "X" when the square is clicked
    //console.log(`Square ${value} clicked!`); // logs a message to the console indicating which square was clicked
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