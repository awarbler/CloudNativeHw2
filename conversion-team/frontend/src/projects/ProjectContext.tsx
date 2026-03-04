import React, { createContext, useContext, useMemo, useState } from "react"; // import React hooks/types

export type CurrentProject = { // define CurrentProject type
  projectId: string; // projectId string
  name: string; // project name string
}; // end type

type ProjectContextValue = { // define context shape
  currentProject: CurrentProject | null; // selected project or null
  setCurrentProject: (project: CurrentProject | null) => void; // setter function
}; // end type

const ProjectContext = createContext<ProjectContextValue | undefined>(undefined); // create context with undefined default

export const ProjectProvider = ({ children }: { children: React.ReactNode }) => { // provider component
  const [currentProject, setCurrentProject] = useState<CurrentProject | null>(null); // state for selected project

  const value = useMemo( // memoize context value
    () => ({ currentProject, setCurrentProject }), // context value object
    [currentProject] // recompute when currentProject changes
  ); // end memo

  return ( // return provider JSX
    <ProjectContext.Provider value={value}> {/* provide context */}
      {children} {/* render children */}
    </ProjectContext.Provider> // end provider
  ); // end return
}; // end provider

export const useProject = () => { // hook to consume context
  const context = useContext(ProjectContext); // read context
  if (!context) { // guard missing provider
    throw new Error("useProject must be used within a ProjectProvider"); // throw error
  } // end guard
  return context; // return context value
}; // end hook
