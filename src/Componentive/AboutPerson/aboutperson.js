import React, { useState } from "react";
import "./aboutperson.css";
import userOctagan from "../AboutPerson/userOctagon.png";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "react-router-dom";


const AboutPerson = () => {
  const [Name, setName] = useState("");
  const [moniker, setMoniker] = useState("");
  const [politicallyExposed, setPoliticallyExposed] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isMaritalStatusSelected, setIsMaritalStatusSelected] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState("");
  const [tradingExperience, setTradingExperience] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [OccupationData, setOccupationData] = useState("");

   const navigate = useNavigate();
    const handleNavigate = () => {
      navigate("/tradingPreference");
    };

  const handleOccupationChange = (event) => {
    const occupation = event.target.value;
    setOccupationData(occupation);
  };

  const handleAnnualIncomeChange = (event) => {
    const income = event.target.value;
    setAnnualIncome(income);
  };

  const handleTradingExperienceChange = (event) => {
    const experience = event.target.value;
    setTradingExperience(experience);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setPoliticallyExposed(value);
  };

  const handleMaritalStatusChange = (event) => {
    const status = event.target.value;
    setMaritalStatus(status);

    if (status) {
      setIsMaritalStatusSelected(true);
    } else {
      setIsMaritalStatusSelected(false);
    }
  };

  const isContinueEnabled = selectedOptions.includes("Yes");

  return (
      <div className="curveasdfBorder">
        <div className="smallMaterial">
          <div className="iconicSearch">
            <img src={userOctagan} className="iconicIcon" />
          </div>
          <div className="pageThree">
            <p>Step 2 of 8</p>
          </div>
        </div>
        <div className="personInfo">
          <p>
            <b>Share A Bit About Yourself</b>
          </p>
        </div>
        <div className="nameData">
          <div>
            <TextField
              value={Name}
              margin="auto"
              label="Father's Name"
              id="outlined-basic"
              placeholder="Pavan Kumar K"
              variant="outlined"
              className="inputGrouptypercs"
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
          <div>
            <TextField
              value={moniker}
              margin="auto"
              label="Mother's Name"
              id="outlined-basic"
              placeholder="Saraswati Devi"
              variant="outlined"
              className="motherMoniker"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "100px",
                },
              }}
              onChange={(event) => {
                const value = event.target.value;
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  setMoniker(value);
                }
              }}
            />
          </div>
        </div>
        <div className="statusData">
          <div className="politicsPerson">
            <FormControl
              style={{
                minWidth: 300,
                borderRadius: "100px",
                margin: "auto",
              }}
            >
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  borderRadius: "100px",
                }}
              >
                Are you a politically exposed?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={politicallyExposed}
                label="Are you a politically exposed person (PEP)?"
                onChange={handleChange}
                style={{
                  borderRadius: "100px",
                }}
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="politicsPerson">
            <FormControl
              style={{
                minWidth: 300,
                borderRadius: "100px",
                margin: "auto",
              }}
            >
              <InputLabel
                id="demo-simple-select-label-marital-status"
                style={{
                  borderRadius: "100px",
                }}
              >
                Marital Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label-marital-status"
                id="demo-simple-select-marital-status"
                value={maritalStatus}
                label="Marital Status"
                onChange={handleMaritalStatusChange}
                style={{
                  borderRadius: "100px",
                }}
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="divorced">Divorced</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="statusData">
          <div className="politicsPerson">
            <FormControl
              style={{
                minWidth: 300,
                borderRadius: "100px",
                margin: "auto",
              }}
            >
              <InputLabel
                id="demo-simple-select-label-marital-status"
                style={{
                  borderRadius: "100px",
                }}
              >
                Trading Experience
              </InputLabel>
              <Select
                labelId="demo-simple-select-label-marital-status"
                id="demo-simple-select-marital-status"
                value={tradingExperience}
                label="Trading Experience"
                onChange={handleTradingExperienceChange}
                style={{
                  borderRadius: "100px",
                }}
              >
                <MenuItem value="single">Less than 1 year</MenuItem>
                <MenuItem value="married">1-2 years</MenuItem>
                <MenuItem value="divorced">3-5years</MenuItem>
                <MenuItem value="other">5+years</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="politicsPerson">
            <FormControl
              style={{
                minWidth: 300,
                borderRadius: "100px",
                margin: "auto",
              }}
            >
              <InputLabel
                id="demo-simple-select-label-marital-status"
                style={{
                  borderRadius: "100px",
                }}
              >
                Annual Income
              </InputLabel>
              <Select
                labelId="demo-simple-select-label-marital-status"
                id="demo-simple-select-marital-status"
                value={annualIncome}
                label="Annual Income"
                onChange={handleAnnualIncomeChange}
                style={{
                  borderRadius: "100px",
                }}
              >
                <MenuItem value="single">Less than 1 lakh</MenuItem>
                <MenuItem value="married">1-2 lakhs</MenuItem>
                <MenuItem value="divorced">3-5 lakhs</MenuItem>
                <MenuItem value="other">Above 5 lakhs</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="politicsPrson">
          <FormControl
            style={{
              minWidth: 300,
              borderRadius: "100px",
              margin: "auto",
            }}
          >
            <InputLabel
              id="demo-simple-select-label-marital-status"
              style={{
                borderRadius: "100px",
              }}
            >
              Occupation
            </InputLabel>
            <Select
              labelId="demo-simple-select-label-marital-status"
              id="demo-simple-select-marital-status"
              value={OccupationData}
              label="Occupation"
              onChange={handleOccupationChange}
              style={{
                borderRadius: "100px",
              }}
            >
              <MenuItem value="single">Private Sector</MenuItem>
              <MenuItem value="married">HealthCare</MenuItem>
              <MenuItem value="divorced">Education</MenuItem>
              <MenuItem value="other">Law and Justice</MenuItem>
            </Select>
          </FormControl>
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
              Name.length <= 3 ||
              !isMaritalStatusSelected ||
              !politicallyExposed ||
              !tradingExperience ||
              !annualIncome || !OccupationData
            }
          >
            Continue
          </Button>
        </div>
      </div>
    
  );
};
export default AboutPerson;
