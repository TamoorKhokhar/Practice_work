import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" height="64px">
        <Toolbar variant="dense">
          <Typography variant="h5" color="#212121" component="div">
            Company Name
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
