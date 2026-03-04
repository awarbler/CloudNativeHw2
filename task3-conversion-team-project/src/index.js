import React from "react"; // React runtime
import ReactDOM from "react-dom/client"; // React DOM root API
import "./index.css"; // Global styles
import App from "./App"; // App component
import reportWebVitals from "./reportWebVitals"; // CRA perf helper

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root
root.render(
  <React.StrictMode> {/* Enable dev checks */}
    <App /> {/* Render app */}
  </React.StrictMode>
); // Render tree

reportWebVitals(); // No-op unless configured
