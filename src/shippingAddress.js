import React from 'react'
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";

const ShippingAddress = () => {
  return (
    <>
    <Typography variant="h4">Shipping address</Typography>
    <ThemeProvider theme={theme}>
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
  <Grid
    item
    xs={12}
    sx={{
      display: "flex",
    }}
  >
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
  
</Grid>
</ThemeProvider>
    </>
  )
}

export default ShippingAddress