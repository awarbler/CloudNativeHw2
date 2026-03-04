import React, { createContext, useContext, useMemo, useState } from "react"; // React + hooks

const ProjectContext = createContext(undefined); // Create context

export function ProjectProvider({ children }) { // Provider component
  const [currentProject, setCurrentProject] = useState(null); // Selected project state

  const value = useMemo( // Memoize context value
    () => ({ currentProject, setCurrentProject }), // Provide state + setter
    [currentProject], // Recompute when currentProject changes
  ); // End memo

  return (
    <ProjectContext.Provider value={value}> {/* Provide context */}
      {children} {/* Render children */}
    </ProjectContext.Provider> // End provider
  ); // End return
} // End provider

export function useProject() { // Custom hook
  const context = useContext(ProjectContext); // Read context
  if (!context) { // Guard
    throw new Error("useProject must be used within a ProjectProvider"); // Error message
  } // End guard
  return context; // Return value
} // End hook
