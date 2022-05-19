import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
    main: "#2196f3",
    dark: "#2196f3",
    },
    success: {
      main: "#fafafa ",
      dark: "#1976d2",
      light: "#fafafa",
    },
    secondary: {
      main: "#9500ae",
      dark: "#eceff1",
    },
  },

  typography: {
    h6: {
      fontWeight: "400",
      fontSize: "2.125rem",
      lineHeight: "1.235",
      letterSpacing: "0.00735em",
      textAlign: "center",
      fontFamily: "inter",
      marginTop: "25px",
      marginBottom: "25px",
    },
    h5: {
      fontWeight: "500",
      fontSize: "1.3rem",
      lineHeight: "3",
      letterSpacing: "0.0075em",
      textOverflow: "ellipsis",
      color: "inherit",
      fontFamily: "inter",
      textAlign: "center",
    },
    h4: {
      marginLeft: "4.5%",
      fontWeight: "600",
      fontSize: "1.4rem",
      lineHeight: "1.6",
      letterSpacing: "0.0075em",
      marginBottom: "0.35em",
      fontFamily: "inter",
    },
    text: {
      fontWeight: "500",
      fontSize: "1.3rem",
      lineHeight: "3.5",
      letterSpacing: "0.0075em",
      fontFamily: "inter",
      
    },
  },
});

export default theme;
