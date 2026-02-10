import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles'; // Import MUI ThemeProvider
import CssBaseline from '@mui/material/CssBaseline'; // Import MUI CssBaseline for consistent styling
import theme from './theme'; // Import custom theme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Wrap App with ThemeProvider */}
      <CssBaseline /> {/* Apply baseline CSS for consistent styling */} 
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
