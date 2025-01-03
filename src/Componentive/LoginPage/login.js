import React, { useState } from "react";
import "./login.css";
import logoImage from "../LoginPage/logoImage.png";
import logoCenter from "../LoginPage/logoCenter.png";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import finalLine from "../LoginPage/finalLine.png";
import googleIcon from "../LoginPage/iconFinder.png";
import footerlogo from "../LoginPage/footerLogo.png";
import socialIcon from "../LoginPage/SocialIcons.png";
import rocketImage from "../LoginPage/rocketImage.png";
import playstoreImage from "../LoginPage/playstoreImage.png";
import appsstoreImage from "../LoginPage/appsstoreImage.png";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");
  const [validemail, setvalidemail] = useState(false);

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    const emailvalue = emailRegex.test(value);
    setvalidemail(emailvalue);
    setEmail(value);
  };
  const handleNavigate = () => {
    navigate("/confirmEmailOtp");
  };

  return (
    <div className="libBro">
      <div className="RecTngle">
        <div className="devCart">
          <img src={logoCenter} className="devStreet" />
        </div>
        <div className="devSend">
          <p> Your Details</p>
        </div>
        <div style={{ width: "90%", margin: "auto" }}>
          <TextField
            value={fullName}
            fullWidth
            id="outlined-basic"
            placeholder="Full Name"
            variant="outlined"
            className="inputGrouping"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "100px",
              },
            }}
            onChange={(event) => {
              const value = event.target.value;
              if (/^[a-zA-Z\s]*$/.test(value)) {
                // Allow only alphabets and spaces
                setFullName(value);
              }
            }}
          />
          <div style={{ width: "90%", margin: "auto" }}>
            <TextField
              value={email}
              fullWidth
              id="outlined-basic"
              placeholder="Email"
              variant="outlined"
              className="inputGrouper"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "100px",
                  
                },
              }}
              onChange={(event) => {
                isValidEmail(event.target.value);
              }}
            />

            <div className="firoZab">
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
                disabled={fullName.length <= 3 || !validemail}
              >
                {" "}
                Continue
              </Button>
            </div>
            <div className="driveSeec">
              <img src={finalLine} className="finallyLine" />
            </div>
            <div className="flexIng">
              <div className="insideSect">
                <div className="gooGle">
                  <img src={googleIcon} className="googleSection" />
                </div>
                <div className="contiNue">
                  <p>Continue with Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
