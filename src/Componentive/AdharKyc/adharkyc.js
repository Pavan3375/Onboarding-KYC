import React from "react";
import "./adharkyc.css";
import arrowcircleLeft from "./arrowcircleLeft.png";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import userSearch from "./userSearch.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const AdharKyc = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/fetchedAdhar");
  };
  return (
    <div className="BackSection">
      <div className="headBack">
        <div className="vueSax">
          <img src={arrowcircleLeft} className="imageArrow" />
        </div>
        <div className="backClick">
          <p>Back</p>
        </div>
      </div>
      <div className="secondPage">
        <div className="userSearch">
          <img src={userSearch} className="searchIcon" />
        </div>
        <div className="pageTwo">
          <p>Step 2 of 8</p>
        </div>
      </div>
      <div className="adharVerification">
        <p>
          <b>Aadhaar KYC Verification</b>{" "}
        </p>
      </div>
      <div className="adhrDetls">
        <div className="digiLocker">
          <p>
            Use your Digilocker account to provide address information for KYC.
            Your Aadhaar details will not be stored.
          </p>
        </div>
      </div>
      <div className="belongsClass">
        <p>
          The Aadhar and PAN must belong to you. If not, <b>Start Over</b>
        </p>
      </div>
      <div className="buttonCrop">
        <Button
          variant="contained"
          sx={{
            background: "#111827",
            margin: "auto",
            height: "60px",
            borderRadius: "100px",
            width: "15%",
          }}
          onClick={handleNavigate}
        >
          Continue
        </Button>
      </div>
      <div className="adharDocs">
        <p>
          By clicking continue, I confirm that I have read the{" "}
          <a
            href=""
            target="_blank"
            style={{
              color: "blue",
              textDecoration: "underline",
              whiteSpace: "nowrap",
            }}
          >
            Aadhaar user consent document{" "}
          </a>{" "}
          and voluntarily agree to share my Aadhaar information with Firstock to
          open a trading and demat account in compliance with{" "}
          <a
            href=""
            target="_blank"
            style={{
              color: "blue",
              textDecoration: "underline",
              whiteSpace: "nowrap",
            }}
          >
            KRA
          </a>{" "}
          regulations,{" "}
          <a
            href=""
            target="_blank"
            style={{
              color: "blue",
              textDecoration: "underline",
              whiteSpace: "nowrap",
            }}
          >
            {" "}
            PMLA
          </a>{" "}
          guidelines and other relevant guidelines.
        </p>
      </div>
    </div>
  );
};
export default AdharKyc;
