import {Card, CardContent} from "@mui/material";

function ProjectCard(props) {
    const {project} = props;
    return (
       <Card variant="outlined">
        <CardContent>
            <div>{project.name}</div>
            <div>{project.authorizedUsers}</div>
            <div>{project.joined ? "Joined" : "Not Joined"}</div>
        </CardContent>
       </Card>
    );
}

export default ProjectCard;