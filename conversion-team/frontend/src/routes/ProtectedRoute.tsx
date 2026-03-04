import { Navigate, Outlet, useLocation } from "react-router-dom"; // routing helpers
import { useAuth } from "../auth"; // auth hook

export const ProtectedRoute = () => { // protected route wrapper
  const { isAuthenticated } = useAuth(); // read auth state
  const location = useLocation(); // capture current location

  if (!isAuthenticated) { // if not logged in
    return <Navigate to="/auth" replace state={{ from: location }} />; // redirect to auth
  } // end not-auth

  return <Outlet />; // render nested routes
}; // end component
