import React, { useState } from "react";
import "./otpmobile.css";
import iconImage from "../OtpMobile/iconImage.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from "@mui/material";

import logoImage from "../OtpMobile/logoImage.png";
import logoCenter from "../OtpMobile/logoCenter.png";
import { useNavigate } from "react-router-dom";

const OtpMobile = () => {
  const navigate = useNavigate();

  const [enterotp, setenterotp] = useState("");

  console.log("enterotp.length", enterotp.length);
  const handleNavigate = () => {
    navigate("/loginDetails");
  };
  return (
    <div className="rappEr">
      <div className="contaSec">
        <div className="devSt">
          <img src={logoCenter} className="devSc" />
        </div>
        <div className="devSi">
          <p> OTP Authentication</p>
        </div>
        <div className="devSq">
          <p>6 Digit code sent to your Mobile </p>
        </div>
        <div className="devNumber">
          <p>+91 895*****98</p>
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
    </div>
  );
};
export default OtpMobile;
