import React, { useState } from "react";
import "./emailotp.css";
import logoCenter from "./logoCenter.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import iconImage from "./iconImage.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmailOtp = () => {
  const navigate =useNavigate ();
  const [enterotp, setenterotp] = useState("");

  console.log("enterotp.length", enterotp.length);
  const handleNavigate =() => {
    navigate ("/panData");
  }
  return (
    <div className="contaSec">
      <div className="devSt">
        <img src={logoCenter} className="devSc" />
      </div>
      <div className="devSi">
        <p> OTP Authentication</p>
      </div>
      <div className="devSq">
        <p>6 Digit code sent to your Email </p>
      </div>
      <div className="devNumber">
        <p> Ada**ng@gmail.com</p>
      </div>
      <div className="chiRag">
        <div style={{ width: "90%", margin: "auto" }}>
          <TextField
            value={enterotp}
            fullWidth
            id="outlined-basic"
            placeholder="Enter Your OTP"
            variant="outlined"
            className="inputOtp"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={iconImage} className="searChing" />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "100px",
                },
              },
            }}
            onChange={(event) => {
              const value = event.target.value;
              if (/^\d*$/.test(value) && value.length <= 6) {
                setenterotp(value);
              }
            }}
          />
        </div>
        <div className="otpreSend">
          <div className="reSend">
            <p>Resend OTP in 30 Seconds</p>
          </div>
        </div>
        <div className="buttonCrop">
          <Button
            variant="contained"
            sx={{
              background: "#111827",
              width: "90%",
              margin: "auto",
              height: "60px",
              borderRadius: "100px",
            }}
            onClick={handleNavigate}
            disabled={enterotp.length !== 6}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EmailOtp;
