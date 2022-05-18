import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DenseAppBar from "./Appbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

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
              }}
            >
              <Box component="span">
                <Typography variant="h6">Checkout</Typography>
              </Box>

              <Box
                sx={{
                  height: "max-content",
                }}
              >
                <Typography variant="h4">Shipping address</Typography>

                <Grid
                  container
                  xs={12}
                  sx={{
                    padding: "3%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      sx={{
                        width: "95%",
                      }}
                      required
                      id="standard-basic"
                      label="First name"
                      color="info"
                      variant="filled"
                      margin="normal"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      sx={{
                        width: "95%",
                      }}
                      required
                      id="standard-basic"
                      label="Last name"
                      color="info"
                      variant="filled"
                      margin="normal"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      sx={{
                        width: "97.5%",
                      }}
                      required
                      id="standard-full-width"
                      label="Adress Line 1"
                      color="info"
                      margin="normal"
                      variant="filled"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      sx={{
                        width: "97.5%",
                      }}
                      id="standard-full-width"
                      label="Adress Line 2"
                      color="info"
                      margin="normal"
                      variant="filled"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      sx={{
                        width: "95%",
                      }}
                      required
                      id="standard-basic"
                      label="City"
                      color="info"
                      variant="filled"
                      margin="normal"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      sx={{
                        width: "95%",
                      }}
                      id="standard-basic"
                      label="State/Province/Region"
                      color="info"
                      margin="normal"
                      variant="filled"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      sx={{
                        width: "95%",
                      }}
                      required
                      id="standard-basic"
                      label="Zip/Postel Code"
                      color="info"
                      margin="normal"
                      variant="filled"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      sx={{
                        width: "95%",
                      }}
                      required
                      id="standard-basic"
                      label="Country"
                      color="info"
                      margin="normal"
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox
                      defaultChecked
                      color="secondary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <Typography variant="text">
                      {" "}
                      Use this address for payment details
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginRight: "10px",
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
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;
