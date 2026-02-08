import { useState } from "react";
import {Button, TextField} from "@mui/material";
import "./HardwareSetRow.css";


function HardwareSetRow(props) { // one hardware set row
    const {hardwareSetName, hwSet, onHardwareUpdate} = props; // rec.hwset data from parent

    const [qty, setQty] = useState(""); // controlled input value

    function handleQtyChange(event) { // fires when user types
        setQty(event.target.value); // stores typed value
    }

    function handleCheckInClick() {
        const amount = parseInt(qty); // convert input to number
        if (isNaN(amount) || amount <= 0) { // validate input
            alert("Please enter a valid positive number");
            return;
        }

        const newCheckedOut = Math.max(hwSet.checkedOut - amount, 0); // calculate new checked out qty, ensuring it doesn't go below 0
        onHardwareUpdate(hardwareSetName, newCheckedOut); // update parent state with new checked out qty

        //setCheckedOut(prev => Math.max(prev - amount, 0)); // update checked out qty, ensuring it doesn't go below 0
        setQty(""); // clear input after click
    }

    function handleCheckOutClick() { // placeholder button
        const amount =  parseInt(qty);

        if (isNaN(amount) || amount <= 0) { // validate input
            alert("Please enter a valid positive number");
            return;
        }
        // then check if enough units are available to check out
        const available = hwSet.total - hwSet.checkedOut; // calculate available qty
        if (amount > available) { // validate against available qty
            alert(`Only ${available} items available to check out`);
            return;
        }
        const newCheckedOut = hwSet.checkedOut + amount; // calculate new checked out qty
        onHardwareUpdate(hardwareSetName, newCheckedOut); // update parent state with new checked out qty
        setQty(""); // clear input after click
    }

    return (
        <div className="hw-row">
            <div className="hw-label">{hardwareSetName}: {hwSet.checkedOut}/{hwSet.total}</div>
            {/* */}
            <TextField label="Enter qty" size="small" value={qty} onChange={handleQtyChange}/>
            {/* */}
            <Button className="hw-btn" variant="contained" onClick={handleCheckInClick}>Check In</Button>
            {/* */}
            <Button className="hw-btn" variant="contained" onClick={handleCheckOutClick}>Check Out</Button>
        </div>
    );
}

export default HardwareSetRow;
