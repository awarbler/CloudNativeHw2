import React from "react"; // React import
import "./App.css"; // App styles
import { ProjectProvider } from "./projects/ProjectContext"; // Project context provider
import ProjectsPage from "./pages/ProjectsPage"; // Projects page

function App() { // App component
  return (
    <div className="App"> {/* App wrapper */}
      <ProjectProvider> {/* Provide project context */}
        <ProjectsPage /> {/* Render projects page */}
      </ProjectProvider> {/* End provider */}
    </div> // End wrapper
  ); // End return
} // End App

export default App; // Export App
