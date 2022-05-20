import React from "react";


import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
const OrderSummary = () => {
  return (
    <>
      <Typography variant="orderSummary"> Order Summary</Typography>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={5}
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
              flexDirection: "column",
            }}
          >
            <Typography variant="text1"> Product 1</Typography>
            <Typography variant="text2"> A nice thing</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="text1"> $9.99</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="text1"> Product 2</Typography>
            <Typography variant="text2">Another thing</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="text1"> $3.45</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="text1"> Product 3</Typography>
            <Typography variant="text2"> Something else</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="text1">$6.51</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="text1">Product 4</Typography>
            <Typography variant="text2"> Best thing of all</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="text1"> $14.11</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="text1"> Shipping</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="text1">Free</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="text1"> Total</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="text3">$34.06</Typography>
          </Grid>
          <Grid
            container
            xs={12}
            sx={{
              marginLeft: "3.5%",
            }}
          >
            <Grid
              item
              spacing={1}
              xs={12}
              sm={6}
              sx={{
                padding: "3%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="shippingHeading">Shipping</Typography>

              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                }}
              >
                <Typography variant="text4">John Smith</Typography>
              </Grid>

              <Grid
                item
                xs={6}
                sm={12}
                sx={{
                  display: "flex",
                }}
              >
                <Typography variant="text4">
                  1 MUI Drive, Reactville, Anytown, 99999, USA
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                padding: "3%",
              }}
            >
              <Typography variant="paymentDetails">Payment details</Typography>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography variant="text4">Card Type</Typography>
                  <Typography variant="text4">Card holder</Typography>
                  <Typography variant="text4">Card number</Typography>
                  <Typography variant="text4">Expiry date</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography variant="text4">Visa</Typography>
                  <Typography variant="text4">Mr John s</Typography>
                  <Typography variant="text4">xxxx-1234</Typography>
                  <Typography variant="text4">04/2024</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        
      </ThemeProvider>
    </>
  );
};

export default OrderSummary;
