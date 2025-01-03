import React, { useState } from "react";
import "./banklink.css";
import bankImage from "./bankImage.png";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BankAccountLink() {
  const [Name, setName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [upiId, setUpiId] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/newbankSection");
  };

  return (
    <div className="banklinkBorder">
      <div className="step4Number">
        <div className="yuhtdPut">
          <img src={bankImage} className="bankImage" alt="Bank" />
        </div>
        <div className="page2Data" style={{ marginTop: "-6px" }}>
          <p>Step 4 Of 8</p>
        </div>
      </div>
      <div className="fetchedBankData">
        <p>Fetched Bank Details</p>
      </div>
      <div className="bankNifty">
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
            value={ifscCode}
            margin="auto"
            label="IFSC Code"
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
      </div>
      <div className="bankNifty">
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
      <div className="bankNifty">
        <div>
          <TextField
            value={upiId}
            margin="auto"
            label="UPI ID"
            id="outlined-basic"
            placeholder="7338423115@ybl"
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
                setUpiId(value);
              }
            }}
          />
        </div>

        <div>
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
            width: "17%",
          }}
          onClick={handleNavigate}
          disabled={
            Name.length <= 3 ||
            ifscCode.length !== 11 ||
            accountNumber.length !== 12 ||
            bankName.trim() === "" ||
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z]+$/.test(upiId) ||
            address.length < 5
          }
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default BankAccountLink;
