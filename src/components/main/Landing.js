import { Typography } from "@mui/material";
import React from "react";
import "./landing.css";
function Landing() {
  return (
    <div class="container">
      <Typography className="party" variant="h6">
        Party
      </Typography>
      <div class="decor">
        <div>
          <span>D</span>
        </div>
        <div>
          <span>E</span>
        </div>
        <div>
          <span>C</span>
        </div>
        <div>
          <span>☺</span>
        </div>
        <div>
          <span>R</span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
