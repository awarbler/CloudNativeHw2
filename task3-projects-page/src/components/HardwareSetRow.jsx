import { useState } from "react";
import {Button, TextField} from "@mui/material";
import "./HardwareSetRow.css";


function HardwareSetRow(props) { // one hardware set row
    const {hwSet} = props; // rec.hwset data from parent

    const [qty, setQty] = useState(""); // controlled input value

    function handleQtyChange(event) { // fires when user types
        setQty(event.target.value); // stores typed value
    }

    function handleCheckInClick() { // placeholder button 
        setQty(""); // clear input after click 
    }
    function handleCheckOutClick() { // placeholder button 
        setQty(""); // clear input after click
    }
    return (
        <div className="hw-row">{/* Row layout flex*/}
            {/* label column Matches sketch */}
            <div className="hw-label">{hwSet.name}: {hwSet.checkedOut}/{hwSet.total}</div>
            {/* */}
            <TextField label="Enter qty" size="small" value={qty} onChange={handleQtyChange}/>
            {/* */}
            <Button variant="contained" onClick={handleCheckInClick}>Check In</Button>
            {/* */}
            <Button variant="contained" onClick={handleCheckOutClick}>Check Out</Button>
        </div>
    );
}

export default HardwareSetRow;
