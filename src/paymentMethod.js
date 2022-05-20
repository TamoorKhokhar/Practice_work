import React from 'react'

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "./theme";
import { ThemeProvider } from '@emotion/react';
const PaymentMethod = () => {
  return (
    <>
    <Typography variant="paymentMethod">Payment method</Typography>
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
      label="Name on card"
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
      label="Card Number"
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
      label="Expiry Date"
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
      label="CVV "
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
      Remember credit card details for next time
    </Typography>
  </Grid>
  
</Grid>
</ThemeProvider>
    </>
  )
}

export default PaymentMethod;