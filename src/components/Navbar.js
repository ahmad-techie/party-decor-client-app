import { CatchingPokemon, Celebration } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1D7874",
      }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <Celebration />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Party Decor
        </Typography>
        <Button color="inherit">Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
