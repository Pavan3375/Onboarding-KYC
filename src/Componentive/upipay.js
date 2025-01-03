import React, { useState } from "react";
import "./upipay.css";
import googleImage from "./UpiPayment/googleImage.png";
import phonepayImage from "./UpiPayment/phonepayImage.png";
import amazonImage from "./UpiPayment/amazonImage.png";
import paytmImage from "./UpiPayment/paytmImage.png";
import bhimImage from "./UpiPayment/bhimImage.png";
import scannerImage from "./UpiPayment/scannerImage.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UpiPayment() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleImageClick = () => {
    setIsAccepted(true);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/banklinkSection");
  };

  return (
    <div className="paymentMulti">
      <div className="upiClass">
        <p>Pay with UPI</p>
      </div>
      <div className="debitedAmount">
        <p>Debited Amount ₹1 will be credited within 2 working days</p>
      </div>
      <div className="payContainer">
        <div className="yhbgtPay" style={{ marginTop: "-20px" }}>
          <div className="payRupee">
            <p>Pay </p>
          </div>
          <div className="pay1Rupee">
            <p>₹1.00</p>
          </div>
        </div>
        <div className="qrCodeClass" style={{ marginTop: "40px" }}>
          <p>Scan QR code with any UPI app</p>
        </div>
        <div className="bankLogos" style={{ marginTop: "45px" }}>
          <div className="gogCraft" onClick={handleImageClick}>
            <img src={googleImage} className="googleImage" alt="Google Pay" />
          </div>
          <div className="phoneCraft" onClick={handleImageClick}>
            <img src={phonepayImage} className="phoneImage" alt="PhonePe" />
          </div>
          <div className="amazonCraft" onClick={handleImageClick}>
            <img src={amazonImage} className="amazonImage" alt="Amazon Pay" />
          </div>
          <div className="paytmCraft" onClick={handleImageClick}>
            <img src={paytmImage} className="paytmImage" alt="Paytm" />
          </div>
          <div className="bhimCraft" onClick={handleImageClick}>
            <img src={bhimImage} className="bhimImage" alt="BHIM" />
          </div>
        </div>
        <div className="scannerCraft" style={{ marginTop: "40px" }}>
          <img src={scannerImage} className="scannerImage" alt="QR Scanner" />
        </div>
      </div>
      <div className="buttonCrop" >
        <Button
          variant="contained"
          sx={{
            background: isAccepted ? "#111827" : "#cccccc",
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

export default UpiPayment;
