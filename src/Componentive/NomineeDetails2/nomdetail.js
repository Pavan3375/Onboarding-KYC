import React, { useState } from "react";
import "./nomdetail.css";
import profileuserImage from "./profileuserImage.png";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Checkbox from "@mui/material/Checkbox";

function NomineeDetails2() {
  const [Name, setName] = useState("");
  const [sharePercentage, setSharePercentage] = useState("");
  const [nomineeFile, setnomineeFile] = useState("");
  const [dob, setDob] = useState(null);
  const [checked, setChecked] = React.useState(true);
  const [address, setAddress] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setPincode] = useState("");
  const [nomineeId, setNomineeid] = useState("");
  const [nomineeMbile, setNomineemobile] = useState("");

  const handlenomineeFileChange = (event) => {
    const status = event.target.value;
    setnomineeFile(status);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="qazxswRat">
      <div className="step4Number">
        <div className="yuhtdPut">
          <img src={profileuserImage} className="bankImage" alt="Bank" />
        </div>
        <div className="page2Data" style={{ marginTop: "-6px" }}>
          <p>Step 5 Of 8</p>
        </div>
      </div>
      <div className="addNominee">
        <p>Add Nominee Details</p>
      </div>
      <div className="destSdt">
        <div className="addNomine">
          <p> Nominee Details</p>
        </div>
        <div className="wrapTomb">
          <div className="bankNiftyblock">
            <TextField
              value={Name}
              margin="auto"
              label="Nominee's Full Name"
              id="outlined-basic"
              placeholder="Jakes Micheal"
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
                  setName(value);
                }
              }}
            />
          </div>
          <div className="bankNiftystock">
            <TextField
              value={sharePercentage}
              margin="auto"
              label="Percentage of Share"
              id="outlined-basic-percentage"
              placeholder="100%"
              variant="outlined"
              className="inputGrouptyper"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "100px",
                },
              }}
              onChange={(event) => {
                const value = event.target.value.replace("%", "");
                if (/^\d{0,3}$/.test(value) && Number(value) <= 100) {
                  setSharePercentage(value + "%");
                }
              }}
            />
          </div>
        </div>
        <div className="wrapZombie">
          <div className="politicsNaamm" style={{ marginLeft: "auto" }}>
            <FormControl
              style={{
                minWidth: 300,
                borderRadius: "100px",
              }}
            >
              <InputLabel
                id="demo-simple-select-label-marital-status"
                style={{
                  borderRadius: "100px",
                }}
              >
                Relationship with Nominee
              </InputLabel>
              <Select
                labelId="demo-simple-select-label-marital-status"
                id="demo-simple-select-marital-status"
                value={nomineeFile}
                label="Account Type"
                onChange={handlenomineeFileChange}
                style={{
                  borderRadius: "100px",
                }}
              >
                <MenuItem value="single">Father</MenuItem>
                <MenuItem value="married">Mother</MenuItem>
                <MenuItem value="divorced">Brother</MenuItem>
                <MenuItem value="other">Sister</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="dateContainernom">
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
                          width: "100%",
                        },
                        "& fieldset": {
                          borderColor: "#ccc",
                        },
                      },
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div
          className="flexBox"
          style={{ marginTop: "15px", marginRight: "270px" }}
        >
          <div className="checkBird" style={{ paddingTop: "6px" }}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                color: "black",
                borderRadius: "5px",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
          </div>
          <div className="sameNominee">
            <p>Do You Want Nominee’s address as same as Yours?</p>
          </div>
        </div>
        <div className="nomineeContact">
          <p>Nominee Contact</p>
        </div>
        <div className="adressData">
          <TextField
            value={address}
            fullWidth
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
        <div className="flexContainer">
          <div className="bankNiftysingh">
            <TextField
              value={state}
              margin="auto"
              label="State"
              id="outlined-basic"
              placeholder="Karnataka"
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
                  setstate(value);
                }
              }}
            />
          </div>
          <div className="bankNiftyswad">
            <TextField
              value={city}
              margin="auto"
              label="City"
              id="outlined-basic"
              placeholder="Banglore"
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
                  setcity(value);
                }
              }}
            />
          </div>
        </div>
        <div className="flexContainer">
          <div className="stockBankpocket">
            <div>
              <TextField
                value={pincode}
                margin="auto"
                label="PinCode"
                id="outlined-basic"
                placeholder="560076"
                variant="outlined"
                className="inputGrouptyper"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "100px",
                  },
                }}
                onChange={(event) => {
                  const value = event.target.value;
                  if (/^\d{0,6}$/.test(value)) {
                    setPincode(value);
                  }
                }}
              />
            </div>
          </div>
          <div className="bankNiftyemail">
            <div>
              <TextField
                value={nomineeId}
                margin="auto"
                label="Nominee's Email"
                id="outlined-basic"
                placeholder="Jakes@gmail.com"
                variant="outlined"
                className="inputGrouptyper"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "100px",
                  },
                }}
                onChange={(event) => {
                  const value = event.target.value;
                  if (/^[a-zA-Z0-9._%+-@]*$/.test(value)) {
                    setNomineeid(value);
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="stockBankpocket">
            <div>
              <TextField
                value={nomineeMbile}
                margin="auto"
                label="Nominee's Mobile"
                id="outlined-basic"
                placeholder="7338423115"
                variant="outlined"
                className="inputGrouptyper"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "100px",
                  },
                }}
                onChange={(event) => {
                  const value = event.target.value;
                  if (/^\d{0,10}$/.test(value)) {
                    setNomineemobile(value);
                  }
                }}
              />
            </div>
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
            width: "17%",
          }}
          disabled={
            Name.length <= 3 ||
            !dob ||
            address.length < 5 ||
            state.length <= 3 ||
            city.length <= 3 ||
            pincode.length <= 6 ||
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z]+$/.test(nomineeId) || nomineeMbile.length <= 9
          }
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default NomineeDetails2;
