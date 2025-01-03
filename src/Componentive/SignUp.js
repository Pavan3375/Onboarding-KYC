import React, { useState } from "react";
import logoImage from "./logoImage.png";
import "./sign.css";
import logoCenter from "./logoCenter.png";
import footerlogo from "./footerLogo.png";
import rocketImage from "./rocketImage.png";
import playstoreImage from "./playstoreImage.png";
import appsstoreImage from "./appsstoreImage.png";
import socialIcon from "./SocialIcons.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  const [mobilenumber, setMobileNumber] = useState("");

  console.log("mobilenumber.length", mobilenumber.length);

  const handleNavigate = () =>{
    navigate("/confirmOTP")
  }

  return (
    <div className="signUp">
      <div className="firstAccess">
        <div className="headerOn"></div>
        <div className="aiRectangle">
          <div className="devRectangle">
            <div className="devStyle">
              <img src={logoCenter} className="devScret" />
            </div>
            <div className="devSign">
              <p> Join the Growth Journey</p>
            </div>
            <div className="devFunds">
              <p>Stocks.MutualFunds.IPO.F&O</p>
            </div>

            <div style={{ width: "90%", margin: "auto" }}>
              <TextField
                value={mobilenumber}
                fullWidth
                id="outlined-basic"
                placeholder="Mobile Number"
                variant="outlined"
                className="inputGroup"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                    sx: {
                      borderRadius: "100px",
                    },
                  },
                }}
                onChange={(event) => {
                  const value = event.target.value;
                  if (/^\d*$/.test(value) && value.length <= 10) {
                    setMobileNumber(value);
                  }
                }}
              />
            </div>
            <p className="otpInfo"> You will receieve an OTP on your number</p>
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
                disabled={mobilenumber.length !== 10}
              >
                Continue
              </Button>
            </div>

            <div className="nriLink">
              <p>Want to open an NRI Account?</p>
            </div>
            <div className="termsPolicy">
              <p>
                By proceeding, I agree to Firstock’s{" "}
                <b>Terms and Conditions </b> and <b>Privacy Policy </b>and
                <b> Pricing Policy</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
