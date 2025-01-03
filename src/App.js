import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Componentive/SignUp";
import OtpMobile from "./Componentive/OtpMobile/otpmobile";
import LoginPage from "./Componentive/LoginPage/login";
import FooterRobo from "./Componentive/abcFooter/firstockfooter";
import FooterHead from "./Componentive/abcFooter/footerHead";
import EmailOtp from "./Componentive/emailOtp/emailotp";
import PanDetails from "./Componentive/panSection/PanDetails";
import AdharKyc from "./Componentive/AdharKyc/adharkyc";
import AdharInformation from "./Componentive/AdharInformation/adharinfo";
import AboutPerson from "./Componentive/AboutPerson/aboutperson";
import TradingPreference from "./Componentive/TradingPreference/tradingpreference";
import RiskDerivatives from "./Componentive/RiskDisclosure/riskDerivatives";
import AddingBank from "./Componentive/AddingBank/addbank";
import BankAccountLink from "./Componentive/BankAccountLink/banklink";

import { BrowserRouter } from "react-router-dom";
import Router from "./router";
function App() {
  return (
    <div className="App">
      <FooterHead />
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      {/* <FooterRobo />   */}
    </div>
  );
}

export default App;
