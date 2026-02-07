import {Card, CardContent, Button} from "@mui/material";
import HardwareSetRow from "./HardwareSetRow";
import "./ProjectCard.css";

function ProjectCard(props) {
    // reusable
    const {project , onToggleJoin} = props;

    return (
    <Card variant="outlined" className="project-card">
        <CardContent>
            <div className="project-row">

                <div className="project-left"> {/* left column container */}
                    <div className="project-title-row"> {/* name + users in one row */}
                        <div className="project-name">{project.name}</div> {/* project name */}
                        <div className="project-users">{project.authorizedUsers}</div> {/* users list */}
                    </div>
                </div>

                <div className="project-middle">
                    {project.hardwareSets.map((hwSet) => (
                        <HardwareSetRow key={hwSet.id} hwSet={hwSet} />
                    ))}
                </div>

                <div className="project-right">
                    <Button variant="contained" onClick={() => onToggleJoin(project.id)}>
                        {project.joined ? "Leave" : "Join"}
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
    );
}

export default ProjectCard;