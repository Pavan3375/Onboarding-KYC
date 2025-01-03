import React, { useState } from "react";
import "./addbank.css";
import bankImage from "./bankImage.png";
import upiImage from "./upiImage.png";
import rupeesImage from "./rupeesImage.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


function AddingBank() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleVerifyWithUPI = () => {
    setIsAccepted(true);
  };

  const handleAddManually = () => {
    setIsAccepted(true);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/newbankSection");
  };

  return (
    <div className="tailWind">
      <div className="step4Number">
        <div className="yuhtdPut">
          <img src={bankImage} className="bankImage" alt="Bank" />
        </div>
        <div className="page2Data" style={{ marginTop: "-6px" }}>
          <p>Step 4 Of 8</p>
        </div>
      </div>
      <div className="linkBankdata">
        <p>Link Your Bank Account</p>
      </div>
      <div className="backAccname">
        <p>
          Bank account in your name from which you will transact funds for
          trading
        </p>
      </div>
      <div className="upiContainer">
        <div
          className="upiAbc"
          style={{ marginTop: "12.5px", marginLeft: "15px" }}
        >
          <img src={upiImage} className="upiImage" alt="UPI" />
        </div>
        <div
          className="verifyUpi"
          style={{ marginTop: "-88px", marginRight: "135px", cursor: "pointer" }}
          onClick={handleVerifyWithUPI}
        >
          <p>Verify With UPI</p>
        </div>
        <div className="upiDetails">
          <p>
            We’ll Debit ₹1 to verify your account and refund it after
            verification is complete.
          </p>
        </div>
      </div>
      <div className="throtTler">
        <div
          className="rupeesContainer"
          style={{ marginTop: "12.5px", marginLeft: "15px" }}
        >
          <div className="rupeesHome">
            <img src={rupeesImage} className="rupeesImage" alt="Rupees" />
          </div>
        </div>
        <div
          className="addManually"
          style={{ marginTop: "-88px", marginRight: "86px", cursor: "pointer" }}
          onClick={handleAddManually}
        >
          <p>Add Details Manually</p>
        </div>
        <div className="addManuallyData">
          <p>
            Add your bank details such as bank name, account number and IFSC
            code.
          </p>
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
            width: "22%",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            color: isAccepted ? "white" : "gray",
          }}
          onClick={handleNavigate}

          disabled={!isAccepted}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default AddingBank;
