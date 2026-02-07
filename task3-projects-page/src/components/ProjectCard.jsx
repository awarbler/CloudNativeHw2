import {Card, CardContent, Button} from "@mui/material";

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
        </CardContent>
       </Card>
    );
}

export default ProjectCard;