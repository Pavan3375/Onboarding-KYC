import React, { useState } from "react";
import "./tradingpreference.css";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const TradingPreference = () => {
  const [selectedValue, setSelectedValue] = useState("a");
  const [isEnabled, setIsEnabled] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleInputChange = (e) => {
    setIsEnabled(e.target.value.trim() !== "");
  };

  const handleClick = () => {
    if (isEnabled) {
      alert("Button Clicked!");
    }
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/riskDisclosure");
  };

  return (
    <div className="wrapHeist">
      <div className="middleData">
        <p>Choose Your Trading Preference</p>
      </div>
      <div className="robbinFunds">
        <div className="insideFunds">
          <div className="equityData" style={{ marginTop: "-10px" }}>
            <p>Equity</p>
          </div>
          <div
            className="commodityData"
            style={{ marginTop: "-20px", paddingLeft: "18px" }}
          >
            <p>Buy and Sell Shares</p>
            <div
              className="styleDefault"
              style={{ gap: "10px", marginTop: "10px", marginLeft: "140px" }}
            >
              <div className="defaultSection" style={{ marginTop: "-10px" }}>
                <p>Default</p>
              </div>
              <div className="radioButtons" style={{ paddingTop: "-10px" }}>
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  style={{ paddingTop: "0px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="robbinFunds">
        <div className="insideFunds">
          <div
            className="equityDataboard"
            style={{ display: "flex", marginTop: "-10px" }}
          >
            <p>Mutual Funds</p>
          </div>
          <div className="commodityDataadd">
            <p>Invest In Mutual Funds</p>
            <div
              className="styleDefault"
              style={{ marginTop: "-50px", marginLeft: "285px", gap: "8px" }}
            >
              <div className="defaultSectionbg" style={{ marginTop: "-10px" }}>
                <p>Default</p>
              </div>
              <div className="radioButtonsecond" style={{ marginTop: "-10px" }}>
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="robbinFunds">
        <div className="insideFunds">
          <div
            className="equityDatabroad"
            style={{ display: "flex", marginTop: "-10px" }}
          >
            <p>F&O </p>
          </div>
          <div className="commodityDataminus">
            <p>Trade in Futures and Options </p>

            <div
              className="radioButtonthird"
              style={{ marginTop: "-10px", paddingLeft: "120px" }}
            >
              <Radio
                checked={selectedValue === "c"}
                onChange={handleChange}
                value="c"
                name="radio-buttons"
                inputProps={{ "aria-label": "C" }}
              />
            </div>
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
            width: "28%",
          }}
          onClick={handleNavigate}
          disabled={selectedValue !== "a"}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
export default TradingPreference;
