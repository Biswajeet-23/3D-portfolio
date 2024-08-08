// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize primary color
      contrastText: "#000", // Customize contrast text color
    },
    action: {
      hover: "#e0e0e0", // Customize hover color
    },
  },
  typography: {
    // Customize typography if needed
  },
});

export default theme;
