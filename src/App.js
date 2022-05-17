import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DenseAppBar from "./Appbar";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DenseAppBar />
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

                height: "681px",
              }}
            >
              <Box component="span">
                <Typography variant="h6">Checkout</Typography>
              </Box>
              <Box
                sx={{
                  height: "470px",
                }}
              ></Box>
              <Grid
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "20px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "success.dark",
                    color: "success.light",
                  }}
                >
                  NEXT
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;
