import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ede7f6'
      },
      success: {
        main: '#fafafa ',
        dark:'#1976d2',
        light:'#fafafa',
      },
    
     
    },

    typography: {
      h6:{
      fontWeight: "400",
      fontSize: "2.125rem",
      lineHeight: "1.235",
      letterSpacing: "0.00735em",
      textAlign: "center",
      fontFamily:'inter',
      marginTop:'48px',
      marginBottom: '48px',
    },
    h5:{
      fontWeight: '400',
    fontSize: '1.25rem',
    lineHeight: '3',
    letterSpacing: '0.0075em',
    textOverflow: 'ellipsis',
    color: 'inherit',
    textAlign: "center",
    
      
     
    },
  
    
  
  }
    
  })

  export default theme;