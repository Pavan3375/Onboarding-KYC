import React, { useState } from "react";
import "./pandetails.css";
import keyBoard from "./keyboard.png";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useNavigate } from "react-router-dom";

const PanDetails = () => {
  const [panNumber, setPanNumber] = useState("");
  const [dob, setDob] = useState(null);
 const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/kycVerification");
  };
  return (
    <div className="panView">
      <div className="overviewBorder">
        <div className="keyboardIcon">
          <div className="panImg">
            <img src={keyBoard} className="KeyComponent" />
          </div>
          <div className="insideData">
            <p>Step 1 of 8</p>
          </div>
        </div>
        <div className="enterDetails">
          <p>Enter Your PAN Details</p>
        </div>
        <div className="verifiedName">
          <p>Your PAN is needed to verify your identity</p>
        </div>
        <div>
          <TextField
            margin="auto"
            label="Pan Number"
            value={panNumber}
            id="outlined-basic"
            placeholder="PAN Number"
            variant="outlined"
            className="inputGrouptype"
            slotProps={{
              input: {
                sx: {
                  borderRadius: "100px",
                  textTransform: "uppercase",
                },
              },
            }}
            onChange={(event) => {
              const value = event.target.value.toUpperCase();
              if (/^[A-Z0-9]*$/.test(value) && value.length <= 10) {
                setPanNumber(value);
              }
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "100px",
              },
            }}
          />
        </div>
        <div className="dateContainer">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="DD-MM-YYYY"
                value={dob}
                onChange={(newValue) => setDob(newValue)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    placeholder: "DD-MM-YYYY",

                    sx: {
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "100px",
                        width: "100%", // Elliptical input field
                      },
                      "& fieldset": {
                        borderColor: "#ccc", // Optional: Border color
                      },
                    },
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div className="buttonCrop">
          <Button
            variant="contained"
            sx={{
              background: "#111827",
              margin: "auto",
              height: "60px",
              borderRadius: "100px",
              width: "18%",
            }}
            onClick={handleNavigate}

            disabled={panNumber.length !== 10 || !dob}
          >
            Continue
          </Button>
        </div>

        <div className="dataCollection">
          <div className="offlineView">
            <p>
              - Your account name would be taken as per the name registered on
              the Income Tax Database
            </p>
          </div>
          <div className="incomeData">
            - To open an account online, ensure your mobile number is linked to
            your Aadhaar; otherwise, you will need to{" "}
            <a
              href=""
              target="_blank"
              style={{
                textDecoration: "underline",
                color: "blue",
                whiteSpace: "nowrap",
              }}
            >
              proceed offline.
            </a>{" "}
            We do not collect or store your Aadhaar number.
          </div>

          <div className="verificaTion">
            <p>
              - For online account opening, use Digi locker for identity
              verification if you are not KRA verified, and digitally sign the
              application.
            </p>
          </div>
          <div className="offlineForms">
            <p>
              - For HUF, Corporate, Partnership, or NRI accounts,{" "}
              <a href="" target="_blank" style={{ color: "blue" }}>
                {" "}
                offline forms{" "}
              </a>
              must be completed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PanDetails;
