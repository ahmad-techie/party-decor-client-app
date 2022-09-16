import { Button, Typography } from "@mui/material";
import React from "react";
import Quote from "../quote/Quote";
import "./landing.css";
import { open } from "../../redux/actions";
import { useDispatch } from "react-redux";
function Landing() {
  const dispatch = useDispatch();
  return (
    <main className="landing-wrapper">
      <Typography id="title">Party Decor</Typography>
      <Typography sx={{ color: "#ffcc00", fontSize: "2em" }} id="catch">
        Let's make your party memorable!
      </Typography>
      <div className="img-container">
        <img
          className="landing-img"
          src="./images/balloons.png"
          alt="balloons"
        />
        <Button
          onClick={() => dispatch(open())}
          variant="contained"
          className="btn-main"
          id="btn-main"
          sx={{
            backgroundColor: "#F44926",
            borderRadius: "1.5em",
          }}
        >
          Get a Quote Now
        </Button>
      </div>
      <Quote />
    </main>
  );
}

export default Landing;
