import React, { useState } from "react";
import "./nominee.css";
import bankImage from "./bankImage.png";
import { Button } from "@mui/material";

function NomineeDetails() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleNomineeDetailsProvided = () => {
    setIsAccepted(true);
  };

  return (
    <div className="nomineeContainer">
      <div className="step4Number">
        <div className="yuhtdPut">
          <img src={bankImage} className="bankImage" alt="Bank" />
        </div>
        <div className="page2Data" style={{ marginTop: "-6px" }}>
          <p>Step 4 Of 8</p>
        </div>
      </div>
      <div className="addNominee">
        <p>Add Nominee</p>
      </div>
      <div className="easyAdd" onClick={handleNomineeDetailsProvided}>
        <p>
          Easily add up to three nominees to your demat account. Just upload
          their ID proofs and guardian’s if needed.
        </p>
      </div>
      <div className="skipBut">
        <div className="continueClass">
          <div className="skipClass">
            <p>Skip & Continue</p>
          </div>
        </div>
        <div className="buttonCrops">
        <Button
          sx={{
            color: "white",
            gap: "0px",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "#111827",
            borderRadius: "1000px",
            border: "1.5px solid #e5e7eb",
            height: "50px",
            width: "187px",
            marginRight: "30px",
          }}
          disabled={!isAccepted}
        >
          Add Nominee
        </Button>
      </div>
      </div>
    </div>
  );
}

export default NomineeDetails;
