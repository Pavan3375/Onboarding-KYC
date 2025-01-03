import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./riskderivatives.css";
import riskLineimage from "./riskLineimage.png";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 990,
  height: 642,
  radius: "12px",
  borderRadius: "30px",
  border: "1px",
  gap: "35px",
  border: "1px solid #E5E7EB",
  backgroundColor: "#FFFFFF",
  boxShadow: 24,
  p: 4,
};

const RiskDerivatives = () => {
  const [open, setOpen] = React.useState(false);
  const [isAccepted, setIsAccepted] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAccept = () => {
    setIsAccepted(true);
    alert("You have accepted the risk disclosure conditions.");
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/bankSection");
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            <div className="riskDisclosure">
              <div className="disOn">
                <p>Risk disclosures on derivatives</p>
              </div>
              <div className="riskLine" style={{ marginTop: "-20px" }}>
                <img src={riskLineimage} className="riskLineImage" />
              </div>
              <div className="doneWrite">
                <div className="dotIcon">
                  <p>•</p>
                </div>
                <div className="indTraders">
                  <p>
                    9 out of 10 individual traders in equity Futures and Options
                    Segment, incurred net losses.
                  </p>
                </div>
              </div>
              <div className="doneWrite">
                <div className="dotIcon">
                  <p>•</p>
                </div>
                <div className="lossMaker">
                  <p>
                    On an average, loss makers registered net trading loss close
                    to ₹50,00
                  </p>
                </div>
              </div>
              <div className="doneWrite">
                <div className="dotIcon">
                  <p>•</p>
                </div>
                <div className="netTrading">
                  <p>
                    Over and above the net trading losses incurred, loss makers
                    expended an additional 28% of net trading losses as
                    transaction costs.
                  </p>
                </div>
              </div>
              <div className="doneWrite">
                <div className="dotIcon">
                  <p>•</p>
                </div>
                <div className="tradingProfit">
                  <p>
                    Those making net trading profits, incurred between 15% to
                    50% of such profits as transaction cost.
                  </p>
                </div>
              </div>

              <div className="sourcePara">
                <p>
                  Source : SEBI study dated January 25, 2023 on "Analysis of
                  Profit and Loss of Individual Traders dealing in equity
                  Futures and Options (F&O) Segment, wherein Aggregate Level
                  findings are based on annual Profit/Loss incurred by
                  individual traders in equity F&O during FY 2021-22
                </p>
              </div>
              <div className="buttonCrop">
                <Button
                  variant="contained"
                  sx={{
                    background: isAccepted ? "#4CAF50" : "#111827",
                    margin: "auto",
                    height: "60px",
                    borderRadius: "100px",
                    width: "22%",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                  onClick={handleNavigate}
                >
                  I Understand
                </Button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default RiskDerivatives;
