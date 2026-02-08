import { useState } from "react"; // Make projects in state 
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() { // Define the Projects page component

    // global hardware inventory - shared
    const [hardwareInventory, setHardwareInventory] = useState({
        "HWSet1" : { checkedOut:50, total:100 },
        "HWSet2" : { checkedOut: 0, total:100 },
    });
    // list of hardware sets in inventory
    // create "state" to store list of projects.
    const [projects, setProjects] = useState([ // empty list of projects
        {
            id:"p1",
            name: "Project Name 1",
            authorizedUsers: "Anita, Alejandro, Casey",
            joined: false,
            hardwareSets:[ "HWSet1", "HWSet2"]
        },
        { id:"p2", name: "Project Name 2", authorizedUsers: "Issac, Uriel, Anita",joined: true,
            hardwareSets:[ "HWSet1", "HWSet2"]
        },
        { id:"p3", name: "Project Name 3", authorizedUsers: "Alejandro, Casey, Issac, Uriel",joined: false,
            hardwareSets:[ "HWSet1", "HWSet2"]
        },
    ]);

    //dialog states
    const [openNewProject, setOpenNewProject] = useState(false);
    const[openAuthRequest, setOpenAuthRequest] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    // Form states 
    const[newProjectName, setNewProjectName] = useState("");
    const[newProjectUsers, setNewProjectUsers] = useState("");
    const[userName, setUserName] = useState("");

    // Event handler to join or leave a project 
    function handleToggleJoin(projectId) { // function to toggle join/leave project
        setProjects((prevProjects) => (
            prevProjects.map((p) => (
                p.id === projectId ? { ...p, joined: !p.joined } : p
            ))
        ));
    }

    // update hardware inventory
    function handleHardwareUpdate(hardwareSetName, newCheckedOut){
        setHardwareInventory((prevInventory)=>({
            ...prevInventory,
            [hardwareSetName]: {
                ...prevInventory[hardwareSetName],
                checkedOut: newCheckedOut
            }
        }))
    }

    // create a new project
    function handleCreateProject() {
        if (!newProjectName.trim()) {
            alert("Please enter a project name");
            return;
        }
        const newProject = {
            id: `p${projects.length + 1}`,
            name: newProjectName,
            authorizedUsers: newProjectUsers || "No authorized users, please request access",
            joined: false,
            hardwareSets: ["HWSet1", "HWSet2"]// default hardware sets for new projects}
        };
        setProjects([...projects, newProject]);
        setNewProjectName("");
        setNewProjectUsers("");
        setOpenNewProject(false);
    }

    // Request authorization to join a project
    function handleRequestAuth(projectId) {
        if(!userName.trim() || !selectedProjectId) {
            alert("Please enter your name and select a project");
            return;
        }

        setProjects((prevProjects) => (
            prevProjects.map((p) => {
                if(p.id === selectedProjectId) {
                    const currentUsers = p.authorizedUsers === "No authorized users, please request access" 
                        ? ""
                        : p.authorizedUsers + ", "; 
                    return { 
                        ...p, authorizedUsers: currentUsers + userName
                    };
                }
                return p;
            })
        ));
        alert(`Authorization request sent for ${projects.find(p => p.id === selectedProjectId)?.name}`);
        setUserName("");
        setSelectedProjectId("");
        setOpenAuthRequest(false);
    }



    return (
        <div className="projects-page">
            <div className="projects-header">
                <h1>Projects</h1> {/* page title */}
                <div className="header-buttons">
                    <Button variant="outlined" color="primary" onClick={() => setOpenAuthRequest(true)}>Request Authorization</Button>
                    <Button variant="contained" color="primary" onClick={() => setOpenNewProject(true)}>New Project</Button>
                </div>
            </div>
            
            {projects.map((project) => (
                <ProjectCard key={project.id} 
                project={project} 
                hardwareInventory={hardwareInventory}
                onToggleJoin={handleToggleJoin}
                onHardwareUpdate={handleHardwareUpdate}
                />
            ))}
            {/*Create project dialog */}
            <Dialog open={openNewProject} onClose={() => setOpenNewProject(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Create New Project</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" label="Project Name" fullWidth value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} style={{marginBottom:"16px",marginTop:"8px"}}/>

                    <TextField label="Authorized Users (comma separated)" type="text" fullWidth variant="outlined" placeholder="e.g. Alice, Bob,Charlie" value={newProjectUsers} onChange={(e) => setNewProjectUsers(e.target.value)} />
            
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenNewProject(false)}>Cancel</Button>
                    <Button onClick={handleCreateProject} variant="contained" > Create</Button>
                </DialogActions>
            </Dialog>
            {/* Request authorization dialog */}
            <Dialog open={openAuthRequest} onClose={() => setOpenAuthRequest(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Request Authorization</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" label="Your Name" type="text" fullWidth variant="outlined" value={userName} onChange={(e) => setUserName(e.target.value)} style={{marginBottom:"16px",marginTop:"8px"}}/>
                    <TextField select margin="dense" label="Select Project" fullWidth variant="outlined" value={selectedProjectId} onChange={(e) => setSelectedProjectId(e.target.value)} SelectProp={{ native: true,}}>
                        <option value=""></option>
                        {projects.map((p) => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenAuthRequest(false)}>Cancel</Button>
                    <Button onClick={handleRequestAuth} variant="contained" > Request Access</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Projects;