import { createTheme } from "@mui/material/styles"; // Import MUI theme builder

const theme = createTheme({ // Create a theme instance
  palette: { // Define color palette
    primary: { // Primary brand colors (Powder Teal)
      main: "#00897B", // Powder Teal
      light: "#26A69A", // Powder Teal Light
      dark: "#004D40", // Powder Teal Dark
      contrastText: "#FFFFFF", // White text on teal
    }, // End primary
    secondary: { // Accent colors (Powder Cyan)
      main: "#00BCD4", // Powder Cyan
      dark: "#0097A7", // Powder Cyan Dark
      contrastText: "#FFFFFF", // White text on cyan
    }, // End secondary
    background: { // Background colors
      default: "#F5F5F5", // Light gray background
      paper: "#FFFFFF", // White cards
    }, // End background
    text: { // Text colors
      primary: "#212121", // Near black
      secondary: "#666666", // Secondary text
    }, // End text
    divider: "#BDBDBD", // Border/divider gray
    success: { main: "#4CAF50" }, // Success green
    warning: { main: "#FF9800" }, // Warning orange
    error: { main: "#F44336" }, // Error red
    info: { main: "#2196F3" }, // Info blue (optional)
  }, // End palette
}); // End createTheme

export default theme; // Export theme for ThemeProvider
