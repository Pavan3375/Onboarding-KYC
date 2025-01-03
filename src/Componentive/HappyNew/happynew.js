import React from "react";
import { useNavigate } from "react-router-dom";
import "./happnew.css";

function ShowGif() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/gifSection"); 
  };

  return (
    <div className="borDer">
      <div className="welCome">
        <p>Welcome to Our Party</p>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className="welcomClass" onClick={handleNavigate}>
          Show GIF
        </button>
      </div>
    </div>
  );
}

export default ShowGif;
