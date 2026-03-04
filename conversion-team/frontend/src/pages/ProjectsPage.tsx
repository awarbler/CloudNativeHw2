import { useMemo, useState } from "react"; // react hooks
import { useNavigate } from "react-router-dom"; // navigation
import { useProject } from "../projects/ProjectContext"; // project context hook
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Typography } from "@mui/material"; // mui components
import LogoutIcon from "@mui/icons-material/Logout";

import ProjectCard from "../projects/components/ProjectCard";

import "../projects/components/Projects.css";// styles

function ProjectsPage() { // page component
  const navigate = useNavigate(); // router navigation
  const currentUser = localStorage.getItem("currentUser"); // current user (mock)
  const { currentProject, setCurrentProject } = useProject(); // project context

  const [hardwareInventory, setHardwareInventory] = useState({ // shared hardware inventory state
    HWSet1: { checkedOut: 50, total: 100 }, // hw set 1 mock
    HWSet2: { checkedOut: 0, total: 100 }, // hw set 2 mock
  }); // end hardwareInventory state

  const [projects, setProjects] = useState([ // mock projects list
    { id: "p1", name: "Project Name 1", authorizedUsers: "Anita, Alejandro, Casey", hardwareSets: ["HWSet1", "HWSet2"] }, // project 1
    { id: "p2", name: "Project Name 2", authorizedUsers: "Issac, Uriel, Anita", hardwareSets: ["HWSet1", "HWSet2"] }, // project 2
    { id: "p3", name: "Project Name 3", authorizedUsers: "Alejandro, Casey, Issac, Uriel", hardwareSets: ["HWSet1", "HWSet2"] }, // project 3
  ]); // end projects state

  const projectsWithJoined = useMemo(() => { // derive joined flag from context
    return projects.map((p) => ({ // map projects
      ...p, // keep fields
      joined: currentProject?.projectId === p.id, // joined if selected
    })); // end map
  }, [projects, currentProject]); // recompute when either changes

  const [openNewProject, setOpenNewProject] = useState(false); // new project dialog state
  const [openAuthRequest, setOpenAuthRequest] = useState(false); // request auth dialog state
  const [selectedProjectId, setSelectedProjectId] = useState(""); // selected project for request auth

  const [newProjectName, setNewProjectName] = useState(""); // form state
  const [newProjectUsers, setNewProjectUsers] = useState(""); // form state
  const [userName, setUserName] = useState(""); // auth request name

  function handleToggleJoin(projectId) { // join/leave handler
    const isCurrent = currentProject?.projectId === projectId; // check if already selected
    if (isCurrent) { // if leaving
      setCurrentProject(null); // clear context
      return; // stop
    } // end leave logic

    const selected = projects.find((p) => p.id === projectId); // find selected project
    if (!selected) { // guard invalid id
      alert("Project not found"); // user feedback
      return; // stop
    } // end guard

    setCurrentProject({ projectId: selected.id, name: selected.name }); // set context
  } // end handleToggleJoin

  function handleHardwareUpdate(hardwareSetName, newCheckedOut) { // update inventory callback
    setHardwareInventory((prev) => ({ // functional update
      ...prev, // keep others
      [hardwareSetName]: { // update one set
        ...prev[hardwareSetName], // keep fields
        checkedOut: newCheckedOut, // update checkedOut
      }, // end set update
    })); // end update
  } // end handleHardwareUpdate

  function handleCreateProject() { // create project handler
    if (!newProjectName.trim()) { // validate name
      alert("Please enter a project name"); // error
      return; // stop
    } // end validate

    const newProject = { // new project object
      id: `p${projects.length + 1}`, // mock id
      name: newProjectName, // name
      authorizedUsers: newProjectUsers || "No authorized users, please request access", // users list
      hardwareSets: ["HWSet1", "HWSet2"], // default sets
    }; // end new project

    setProjects((prev) => [...prev, newProject]); // append to list
    setNewProjectName(""); // clear
    setNewProjectUsers(""); // clear
    setOpenNewProject(false); // close dialog
  } // end handleCreateProject

  function handleRequestAuth() { // request auth handler (mock)
    if (!userName.trim() || !selectedProjectId) { // validate required fields
      alert("Please enter your name and select a project"); // error
      return; // stop
    } // end validate

    setProjects((prev) => prev.map((p) => { // update projects list
      if (p.id !== selectedProjectId) return p; // leave others unchanged
      const prefix = p.authorizedUsers === "No authorized users, please request access" ? "" : `${p.authorizedUsers}, `; // prefix logic
      return { ...p, authorizedUsers: `${prefix}${userName}` }; // append name
    })); // end update

    alert(`Authorization request sent for ${projects.find((p) => p.id === selectedProjectId)?.name}`); // message
    setUserName(""); // clear
    setSelectedProjectId(""); // clear
    setOpenAuthRequest(false); // close dialog
  } // end handleRequestAuth

  function handleSignOut() { // sign out handler
    if (window.confirm("Are you sure you want to sign out?")) { // confirm
      localStorage.removeItem("currentUser"); // clear user
      setCurrentProject(null); // clear selected project
      navigate("/"); // go home
    } // end confirm
  } // end handleSignOut

  return (
    <div className="projects-page"> {/* page wrapper */}
      <div className="projects-header"> {/* header row */}
        <div className="header-left"> {/* left header */}
          <h1>Projects</h1> {/* title */}
          {currentUser && ( // show welcome if logged in
            <Typography variant="body2" color="textSecondary"> {/* text */}
              Welcome, {currentUser}! {/* greeting */}
            </Typography> // end typography
          )} {/* end conditional */}
        </div> {/* end header-left */}

        <div className="header-buttons"> {/* right header buttons */}
          <Button variant="outlined" color="primary" onClick={() => setOpenAuthRequest(true)}>Request Authorization</Button> {/* open auth dialog */}
          <Button variant="contained" color="primary" onClick={() => setOpenNewProject(true)}>New Project</Button> {/* open new project dialog */}
          <Button variant="outlined" color="error" startIcon={<LogoutIcon />} onClick={handleSignOut}>Sign Out</Button> {/* sign out */}
        </div> {/* end header buttons */}
      </div> {/* end header */}

      {projectsWithJoined.map((project) => ( // render all projects
        <ProjectCard
          key={project.id} // key
          project={project} // project data (includes joined)
          hardwareInventory={hardwareInventory} // inventory
          onToggleJoin={handleToggleJoin} // join handler
          onHardwareUpdate={handleHardwareUpdate} // hw update handler
        />
      ))} {/* end map */}

      <Dialog open={openNewProject} onClose={() => setOpenNewProject(false)} maxWidth="sm" fullWidth> {/* create project dialog */}
        <DialogTitle>Create New Project</DialogTitle> {/* title */}
        <DialogContent> {/* body */}
          <TextField autoFocus margin="dense" label="Project Name" fullWidth value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} style={{ marginBottom: "16px", marginTop: "8px" }} /> {/* name field */}
          <TextField label="Authorized Users (comma separated)" type="text" fullWidth variant="outlined" placeholder="e.g. Alice, Bob, Charlie" value={newProjectUsers} onChange={(e) => setNewProjectUsers(e.target.value)} /> {/* users field */}
        </DialogContent> {/* end content */}
        <DialogActions> {/* actions */}
          <Button onClick={() => setOpenNewProject(false)}>Cancel</Button> {/* cancel */}
          <Button onClick={handleCreateProject} variant="contained">Create</Button> {/* create */}
        </DialogActions> {/* end actions */}
      </Dialog> {/* end dialog */}

      <Dialog open={openAuthRequest} onClose={() => setOpenAuthRequest(false)} maxWidth="sm" fullWidth> {/* request auth dialog */}
        <DialogTitle>Request Authorization</DialogTitle> {/* title */}
        <DialogContent> {/* body */}
          <TextField autoFocus margin="dense" label="Your Name" type="text" fullWidth variant="outlined" value={userName} onChange={(e) => setUserName(e.target.value)} style={{ marginBottom: "16px", marginTop: "8px" }} /> {/* name */}
          <TextField select margin="dense" label="Select Project" fullWidth variant="outlined" value={selectedProjectId} onChange={(e) => setSelectedProjectId(e.target.value)}> {/* select */}
            <MenuItem value="">Select a project</MenuItem> {/* empty option */}
            {projects.map((p) => ( // options
              <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem> // option
            ))} {/* end map */}
          </TextField> {/* end select */}
        </DialogContent> {/* end content */}
        <DialogActions> {/* actions */}
          <Button onClick={() => setOpenAuthRequest(false)}>Cancel</Button> {/* cancel */}
          <Button onClick={handleRequestAuth} variant="contained">Request Access</Button> {/* submit */}
        </DialogActions> {/* end actions */}
      </Dialog> {/* end dialog */}
    </div> // end wrapper
  ); // end return
} // end component

export default ProjectsPage; // export
