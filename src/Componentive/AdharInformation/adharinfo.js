import React, { useState } from "react";
import "./adharinfo.css";
import boyImage from "./boyImage.png";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import arrowcircleLeft from "./arrowcircleLeft.png";
import userSearch from "./userSearch.png";
import { useNavigate } from "react-router-dom";

const AdharInformation = () => {
  const [adhaarNumber, setAadhaarNumber] = useState("");
  const [Name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/personalData");
  };
  return (
    <div className="curveBorder">
      <div className="headBack">
        <div className="vueSax">
          <img src={arrowcircleLeft} className="imageArrow" />
        </div>
        <div className="backClick">
          <p>Back</p>
        </div>
      </div>
      
      <div className="secondPagews">
        <div className="userSearchvu">
          <img src={userSearch} className="searchIcon" />
        </div>
        <div className="pageTwoth">
          <p>Step 2 of 8</p>
        </div>
      </div>
      <div className="backContainer">
        <div className="vipEdt">
          <p>
            <b>Fetched Aadhar Details</b>
          </p>
        </div>
      </div>
      <div className="nedrContainer">
        <div className="asrfPed">
          <img src={boyImage} className="werfTfr" />
        </div>
        <div>
          <div className="qwdfYou">
            <TextField
              margin="auto"
              label="Aadhaar Number"
              value={adhaarNumber}
              id="outlined-basic"
              placeholder="XXXX-XXXX-7657"
              variant="outlined"
              className="inputGrouptyper"
              slotProps={{
                input: {
                  sx: {
                    borderRadius: "100px",
                  },
                },
              }}
              onChange={(event) => {
                const value = event.target.value;
                if (/^\d*$/.test(value) && value.length <= 12) {
                  setAadhaarNumber(value);
                }
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "100px",
                },
              }}
            />

            <div>
              <TextField
                value={Name}
                margin="auto"
                label="Name"
                id="outlined-basic"
                placeholder="John Stuart"
                variant="outlined"
                className="inputGrouptyper"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "100px",
                  },
                }}
                onChange={(event) => {
                  const value = event.target.value;
                  if (/^[a-zA-Z\s]*$/.test(value)) {
                    // Allow only alphabets and spaces
                    setName(value);
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="koikTyh">
          <div className="dateContainerin">
            <TextField
              value={dob}
              margin="auto"
              label="DD-MM-YYYY"
              id="outlined-basic"
              placeholder="DD-MM-YYYY"
              variant="outlined"
              className="inputGrouptyper"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "100px",
                },
              }}
              onChange={(event) => {
                const value = event.target.value;
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  // Allow only alphabets and spaces
                  setDob(value);
                }
              }}
            />
          </div>
          <div>
            <TextField
              margin="auto"
              label="Gender"
              value={gender}
              id="outlined-basic"
              placeholder="Enter Gender"
              variant="outlined"
              className="inputGrouptype"
              slotProps={{
                input: {
                  sx: {
                    borderRadius: "100px",
                  },
                },
              }}
              onChange={(event) => {
                const value = event.target.value;
                if (/^[a-zA-Z]*$/.test(value)) {
                  setGender(value);
                }
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "100px",
                },
              }}
            />
          </div>
        </div>
        <div className="adressData">
          <TextField
            value={address}
            margin="auto"
            label="Address"
            id="outlined-basic"
            placeholder="Enter Address"
            variant="outlined"
            className="inputGrouptype"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "100px",
                width: "100%",
              },
            }}
            onChange={(event) => {
              const value = event.target.value;
              if (/^[a-zA-Z0-9\s]*$/.test(value) && value.length <= 100) {
                setAddress(value);
              }
            }}
          />
        </div>
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

          disabled={
            adhaarNumber.length !== 12 ||
            Name.length <= 3 ||
            dob.length <= 5 ||
            gender.length <= 3 ||
            address.length < 5
          }
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
export default AdharInformation;
