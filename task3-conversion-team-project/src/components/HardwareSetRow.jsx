import { useState } from "react";
import {Button, TextField} from "@mui/material";
import { checkOutHardware, checkInHardware } from "../api/hardwareApi";

import "./HardwareSetRow.css";


function HardwareSetRow(props) { // one hardware set row
    const {hardwareSetName, hwSet, onHardwareUpdate, isJoined, projectId} = props; // rec.hwset data from parent

    const [qty, setQty] = useState(""); // controlled input value

    if (!hwSet) { // validate hwSet data exists
        return (
            <div className="hw-row">
                <div className="hw-label">{hardwareSetName}: unavailable</div>
            </div>
        );
    }

    function handleQtyChange(event) { // fires when user types
        setQty(event.target.value); // stores typed value
    }

    async function handleCheckInClick() {

        if (!isJoined) { // validate user is part of project
            alert("Join Project to check in hardware");
            return;
        }

        const amount = Number(qty); // convert input to number
        if (!Number.isInteger(amount) || amount <= 0) { // validate input
            alert("Please enter a valid positive number");
            return;
        }

        const newCheckedOut = hwSet.checkedOut - amount; // compute new check out value
        if (newCheckedOut < 0) {
            alert(`You may only check in up to ${hwSet.checkedOut} items`);
            return;
        }
        const res = await checkInHardware(projectId, hardwareSetName, amount); // call API to check in hardware
        if (!res.ok) { // validate API response
            alert("Failed to check in hardware. Please try again.");
            return;
        }

        onHardwareUpdate(hardwareSetName, newCheckedOut); // update parent state with new checked out qty

        //setCheckedOut(prev => Math.max(prev - amount, 0)); // update checked out qty, ensuring it doesn't go below 0
        setQty(""); // clear input after click
    }

    async function handleCheckOutClick() { // placeholder button
        if (!isJoined) { // validate user is part of project
            alert("Join Project to check out hardware");
            return;
        }

        const amount =  Number(qty);

        if (!Number.isInteger(amount) || amount <= 0) { // validate input
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
        
        const res = await checkOutHardware(projectId, hardwareSetName, amount); // call API to check out hardware
        if (!res.ok) { // validate API response
            alert("Failed to check out hardware. Please try again.");
            return;
        }

        onHardwareUpdate(hardwareSetName, newCheckedOut); // update parent state with new checked out qty
        setQty(""); // clear input after click
    }

    return (
        <div className="hw-row">
            <div className="hw-label">{hardwareSetName}: {hwSet.checkedOut}/{hwSet.total}</div>

            <TextField 
                label="Enter qty" 
                size="small" 
                value={qty} 
                onChange={handleQtyChange}
                disabled={!isJoined}
            />

            <Button 
                className="hw-btn" 
                variant="contained" 
                onClick={handleCheckInClick} 
                disabled={!isJoined}
                >
                    Check In
            </Button>
            <Button 
                className="hw-btn" 
                variant="contained" 
                onClick={handleCheckOutClick} 
                disabled={!isJoined}
                >
                    Check Out
            </Button>

        </div>
    );
}

export default HardwareSetRow;
