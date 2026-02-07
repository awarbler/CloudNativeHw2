import {Button} from "@mui/material";


function HardwareSetRow(props) {
    const {hwSet} = props;
    return (
        <div>
            <span>{hwSet.name}</span>
            <span>Checked Out: {hwSet.checkedOut}</span>
            <Button variant="contained">View Details</Button>

        </div>
    );
}

export default HardwareSetRow;
