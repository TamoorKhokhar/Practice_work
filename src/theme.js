
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
       marginLeft: "3.5%",
      fontWeight: "600",
      fontSize: "1.4rem",
      lineHeight: "1.5",
      letterSpacing: "0.0075em",
     
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    },
    paymentMethod:{
      marginLeft: "4%",
      fontWeight: "600",
      fontSize: "1.4rem",
      lineHeight: "1.5",
      letterSpacing: "0.0075em",
     
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    },
    orderSummary:{
      marginLeft: "3%",
      fontWeight: "600",
      fontSize: "1.4rem",
      lineHeight: "1.5",
      letterSpacing: "0.0075em",
     
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    },
    text: {
      fontWeight: "500",
      fontSize: "1.3rem",
      lineHeight: "3.5",
      letterSpacing: "0.0075em",
      fontFamily: "inter",
    
    },
    text1:{

    },
    text2:{
      margin: '0px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '400',
    fontSize: '0.875rem',
    lineHeight: '1.43',
    letterSpacing: '0.01071em',
    color: 'rgba(0, 0, 0, 0.6)',
    display: 'block',

    },
    text3:{
      margin: '0px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: '1rem',
    lineHeight: '1.75',
    letterSpacing: '0.00938em',
    fontWeight: '700',
    },
    text4:{
     
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
   
  
    },
    text5:{
      
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: '400',
      fontSize: '1.5rem',
      lineHeight: '1.334',
      
    },
    shippingHeading:{
  margin:'0',
      fontWeight: "500",
      fontSize: "1.25rem",
      lineHeight: "1.6",
      letterSpacing: "0.0075em",
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",

     
    },
    paymentDetails:{
      margin:"0",
      fontWeight: "500",
      fontSize: "1.25rem",
      lineHeight: "1.6",
      letterSpacing: "0.0075em",
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      
    },
  
  },
});

export default theme;
