import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Projects from "./components/Projects";

// Protected Route wrapper
function ProtectedRoute({ children }) {
    const isAuthenticated = localStorage.getItem("currentUser"); 
    return isAuthenticated ? children : <Navigate to="/" replace />; // If authenticated, render children, else redirect to sign-in
}

function App(){
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/projects" element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    );
}

export default App;
