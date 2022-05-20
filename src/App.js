import "./App.css";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DenseAppBar from "./Appbar";
import Typography from "@mui/material/Typography";


import HorizontalLinearStepper from "./counter";
const App = () => {






  return (
    <>
      <DenseAppBar />
      
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{
            backgroundColor: "succes.main",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            maxWidth={"sm"}
            sx={{
              marginTop: "48px",
              marginBottom: "48px",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: "succes.main",
                border: "2px solid rgba(0, 0, 0, 0.12)",
              }}
            >
              <Box component="span">
                <Typography variant="h6">Checkout</Typography>
              </Box>

              <Box>
                <Grid
                  item
                  xs={12}
                  sx={{
                    paddingRight: "3%",
                    paddingLeft: "3%",
                    margin: "5%",
                  }}
                >
                   
                   <HorizontalLinearStepper/>
                </Grid>

                
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;
