import React, { useState } from "react";
import "./newbank.css";
import bankImage from "./bankImage.png";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

function NewBank() {
  const [Name, setName] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmaccountNumber, setconfirmAccountNumber] = useState("");
  const [isMaritalStatusSelected, setIsMaritalStatusSelected] = useState(false);
  const [savingsAccount, setsavingsAccount] = useState("");

  const handleSavingsAccountChange = (event) => {
    const status = event.target.value;
    setsavingsAccount(status);

    if (status) {
      setIsMaritalStatusSelected(true);
    } else {
      setIsMaritalStatusSelected(false);
    }
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/nomineeSection");
  };

  return (
    <div className="newbankBorder">
      <div className="step4Number">
        <div className="yuhtdPut">
          <img src={bankImage} className="bankImage" alt="Bank" />
        </div>
        <div className="page2Data" style={{ marginTop: "-6px" }}>
          <p>Step 4 Of 8</p>
        </div>
      </div>
      <div className="fetchedBankData">
        <p>Add Your Bank Details</p>
      </div>
      <div className="stockBank">
        <div>
          <TextField
            value={Name}
            margin="auto"
            label="Name as per Bank Record"
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
                setName(value);
              }
            }}
          />
        </div>
        <div>
          <TextField
            value={bankName}
            margin="auto"
            label="Bank Name"
            id="outlined-basic"
            placeholder="HDFC Bank"
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
                setBankName(value);
              }
            }}
          />
        </div>
      </div>
      <div className="stockBank">
        <div>
          <TextField
            value={ifscCode}
            margin="auto"
            label="Branch's IFSC Code"
            id="outlined-basic"
            placeholder="SBIN50001"
            variant="outlined"
            className="inputGrouptyper"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "100px",
              },
            }}
            onChange={(event) => {
              const value = event.target.value;
              if (/^[a-zA-Z0-9]{0,11}$/.test(value)) {
                setIfscCode(value);
              }
            }}
          />
        </div>
        <div>
          <TextField
            value={accountNumber}
            margin="auto"
            label="Bank Account Number"
            id="outlined-basic"
            placeholder="1234567894561"
            variant="outlined"
            className="inputGrouptyper"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "100px",
              },
            }}
            onChange={(event) => {
              const value = event.target.value;
              if (/^\d{0,12}$/.test(value)) {
                setAccountNumber(value);
              }
            }}
          />
        </div>
      </div>
      <div className="stockBank">
        <div>
          <TextField
            value={confirmaccountNumber}
            margin="auto"
            label="Confirm Bank Account Number"
            id="outlined-basic"
            placeholder="1234567894561"
            variant="outlined"
            className="inputGrouptyper"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "100px",
              },
            }}
            onChange={(event) => {
              const value = event.target.value;
              if (/^\d{0,12}$/.test(value)) {
                setconfirmAccountNumber(value);
              }
            }}
          />
        </div>
        <div className="politicsNaam">
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
              Account Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label-marital-status"
              id="demo-simple-select-marital-status"
              value={savingsAccount}
              label="Account Type"
              onChange={handleSavingsAccountChange}
              style={{
                borderRadius: "100px",
              }}
            >
              <MenuItem value="single">Saving Account</MenuItem>
              <MenuItem value="married">Current Account</MenuItem>
              <MenuItem value="divorced">Fixed Deposit Account</MenuItem>
              <MenuItem value="other">Salary Account</MenuItem>
            </Select>
          </FormControl>
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
          onClick={handleNavigate}
          disabled={
            Name.length <= 3 ||
            bankName.trim() === "" ||
            ifscCode.length !== 11 ||
            accountNumber.length !== 12 ||
            confirmaccountNumber.length !== 12 ||
            !isMaritalStatusSelected
          }
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default NewBank;
