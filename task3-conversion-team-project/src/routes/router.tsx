import { createBrowserRouter } from "react-router-dom"; // router factory
import { ProtectedRoute } from "./ProtectedRoute"; // protected wrapper
import { AppLayout } from "../layouts"; // layout wrapper
import { Account, Auth, Home } from "../pages"; // pages
import ProjectsPage from "../pages/ProjectsPage"; // conversion projects page

export const router = createBrowserRouter([ // router definition
  { // root route
    path: "/", // root path
    element: <AppLayout />, // layout
    children: [ // nested routes
      { index: true, element: <Home /> }, // home
      { path: "auth", element: <Auth /> }, // auth page

      { // authenticated section
        element: <ProtectedRoute />, // protect children
        children: [ // protected children
          { path: "account", element: <Account /> }, // account
          { path: "projects", element: <ProjectsPage /> }, // projects
        ], // end protected children
      }, // end authenticated section
    ], // end children
  }, // end root route
]); // end router
