import { useState } from "react"; // Make projects in state 
import ProjectCard from "./ProjectCard";

function Projects() { // Define the Projects page component
    // create "state" to store list of projects.
    const [projects, setProjects] = useState([ // empty list of projects
        { id:"p1", name: "Project Name 1", authorizedUsers: "list, of, authorized, users",joined: false,
            hardwareSets:[
                {id:"p1-h1", name:"HWSet1", checkedOut:2, total:100},
                {id:"p1-h2", name:"HWSet2", checkedOut:0, total:100},
            ]
        },
        { id:"p2", name: "Project Name 2", authorizedUsers: "list, of, authorized, users",joined: true,
            hardwareSets:[
                {id:"p2-h1", name:"HWSet1", checkedOut:1, total:100},
                {id:"p2-h2", name:"HWSet2", checkedOut:3, total:100},
            ]
        },
        { id:"p3", name: "Project Name 3", authorizedUsers: "list, of, authorized, users",joined: false,
            hardwareSets:[
                {id:"p3-h1", name:"HWSet1", checkedOut:0, total:100},
                {id:"p3-h2", name:"HWSet2", checkedOut:4, total:100},
            ]
        },
    ]);
    // Event handler to join or leave a project 
    function handleToggleJoin(projectId) { // function to toggle join/leave project
        setProjects((prevProjects) => (
            prevProjects.map((p) => (
                p.id === projectId ? { ...p, joined: !p.joined } : p
            ))
        ));
    }

    // Render the list of projects in the UI
    return ( // return the UI for the projects page
        <div>
            <h1>Projects</h1> {/* page title */}
            {/*show projects dynamically*/}
            {projects.map((project) => ( 
                <ProjectCard key={project.id} project={project} onToggleJoin={handleToggleJoin}  />

            ))}

        </div>
        );


}

export default Projects;