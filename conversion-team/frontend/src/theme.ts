import { createTheme } from "@mui/material/styles"; // import createTheme from MUI

const theme = createTheme({ // create a theme instance
  palette: { // define palette
    primary: { // primary palette
      main: "#00897B", // Powder Teal main
      light: "#26A69A", // Powder Teal light
      dark: "#004D40", // Powder Teal dark
      contrastText: "#FFFFFF", // contrast text
    }, // end primary
    secondary: { // secondary palette
      main: "#00BCD4", // Powder Cyan main
      dark: "#0097A7", // Powder Cyan dark
      contrastText: "#FFFFFF", // contrast text
    }, // end secondary
    background: { // background palette
      default: "#F5F5F5", // default background
      paper: "#FFFFFF", // paper background
    }, // end background
    text: { // text palette
      primary: "#212121", // primary text
      secondary: "#666666", // secondary text
    }, // end text
    divider: "#BDBDBD", // divider color
    success: { main: "#4CAF50" }, // success color
    warning: { main: "#FF9800" }, // warning color
    error: { main: "#F44336" }, // error color
    info: { main: "#2196F3" }, // info color
  }, // end palette
}); // end createTheme

export default theme; // export theme
