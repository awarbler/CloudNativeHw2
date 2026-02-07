import { useState } from "react"; // Make projects in state 

function Projects() { // Define the Projects page component
    // create "state" to store list of projects.
    const [projects, setProjects] = useState([ // empty list of projects
        { id:"p1", name: "Project Name 1", authorizedUsers: "list, of, authorized, users",joined: false},
        { id:"p2", name: "Project Name 2", authorizedUsers: "list, of, authorized, users",joined: true},
        { id:"p3", name: "Project Name 3", authorizedUsers: "list, of, authorized, users",joined: false},
    ]);

    // Render the list of projects in the UI
    return ( // return the UI for the projects page
        <div>
            <h1>Projects</h1> {/* page title */}
            {/*show projects dynamically*/}
            {projects.map((project) => ( 
                <div key={project.id}> 
                <div > {project.name} {/* display project name */}</div>
                <div> {project.authorizedUsers} {/* display authorized users */}</div>
                <div> {project.joined ? "Joined" : "Not Joined"} {/* display joined status */}</div>
                </div>
            ))}
            <p> Task 3 Projects page will go here.</p> {/* placeholder text for now */ }
        </div>
        );
// TODO: Appear on screen.
// TODO: make it useable in APP.js
// TODO: Convert to a Project Card
    
}

export default Projects;