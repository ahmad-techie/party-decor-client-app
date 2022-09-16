import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { close } from "../../redux/actions";
import { useDispatch } from "react-redux";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

function Quote() {
  const dispatch = useDispatch();
  const [indoorOutdoor, setIndoorOutdoor] = useState("");
  const [value, setValue] = useState(null);
  const [time, setTime] = useState(null);
  console.log(value);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #762FCF",
    boxShadow: 24,
    p: 4,
  };

  const open = useSelector((state) => state.quote.open);
  return (
    <div>
      <Modal
        open={open}
        onClose={() => dispatch(close())}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please fill out this form
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please provide the following information
          </Typography>

          <TextField
            id="outlined-basic"
            label="What type of event are you hosting?"
            variant="outlined"
            sx={{ mt: 2, width: "100%" }}
            size="small"
            select
          >
            <MenuItem value="birthday">Birthday</MenuItem>
            <MenuItem value="babyshower">Baby Shower</MenuItem>
            <MenuItem value="graudation">Graduation</MenuItem>
            <MenuItem value="anniversary">Anniversary</MenuItem>
            <MenuItem value="gender-reveal">Gender Reveal</MenuItem>
          </TextField>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Event Date
          </Typography>
          <input
            id="date"
            type="date"
            onChange={(e) => setValue(e.target.value)}
          />
          <Typography variant="body2" sx={{ mt: 2 }}>
            Event Time
          </Typography>
          <input
            id="date"
            type="time"
            onChange={(e) => setTime(e.target.value)}
          />

          <FormControl sx={{ mt: 2 }}>
            <FormLabel id="indoor-outdoor">
              Is your event indoor or outdoor?
            </FormLabel>
            <RadioGroup
              aria-labelledby="indoor-outdoor"
              onChange={(e) => setIndoorOutdoor(e.target.value)}
              row
            >
              {/* <Stack direction="row">
                
              </Stack> */}
              <FormControlLabel
                control={<Radio color="secondary" />}
                label="indoor"
                value="indoor"
              />
              <FormControlLabel
                control={<Radio color="secondary" />}
                label="outdoor"
                value="outdoor"
              />
            </RadioGroup>
          </FormControl>

          <hr />
          <Typography variant="body2" sx={{ mt: 2 }}>
            Contact Information
          </Typography>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ mt: "2px" }}
            fullWidth
            size="small"
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ mt: 2 }}
            fullWidth
            size="small"
          />

          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            sx={{ mt: 2 }}
            fullWidth
            size="small"
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2, width: "100%" }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Quote;
