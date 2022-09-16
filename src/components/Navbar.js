import { Celebration, Menu } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#762FCF",
      }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <Celebration />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Party Decor
        </Typography>
        <Button color="inherit">
          <Menu />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
