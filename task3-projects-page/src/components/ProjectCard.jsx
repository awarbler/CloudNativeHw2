import {Card, CardContent, Button} from "@mui/material";
import HardwareSetRow from "./HardwareSetRow";

function ProjectCard(props) {
    // reusable
    const {project , onToggleJoin} = props;
    return (
       <Card variant="outlined">
        <CardContent>
            <div>{project.name}</div>
            <div>{project.authorizedUsers}</div>
            <div>{project.joined ? "Joined" : "Not Joined"}</div>
            <Button variant="contained" onClick={() => onToggleJoin(project.id)}>
                {project.joined ? "Leave" : "Join"}
            </Button>
            {project.hardwareSets.map((hwSet) => (
                <HardwareSetRow key={hwSet.id} hwSet={hwSet} />
            ))}
    
        </CardContent>
       </Card>
    );
}

export default ProjectCard;