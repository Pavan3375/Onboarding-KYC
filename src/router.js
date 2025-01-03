import { useRoutes } from "react-router-dom";
import SignUp from "./Componentive/SignUp";
import OtpMobile from "./Componentive/OtpMobile/otpmobile";
import LoginPage from "./Componentive/LoginPage/login";
import EmailOtp from "./Componentive/emailOtp/emailotp";
import PanDetails from "./Componentive/panSection/PanDetails";
import AdharKyc from "./Componentive/AdharKyc/adharkyc";
import AdharInformation from "./Componentive/AdharInformation/adharinfo";
import AboutPerson from "./Componentive/AboutPerson/aboutperson";
import TradingPreference from "./Componentive/TradingPreference/tradingpreference";
import RiskDerivatives from "./Componentive/RiskDisclosure/riskDerivatives";
import AddingBank from "./Componentive/AddingBank/addbank";
import UpiPayment from "./Componentive/upipay";
import BankAccountLink from "./Componentive/BankAccountLink/banklink";
import NewBank from "./Componentive/NewBankAcc/newbank";
import NomineeDetails from "./Componentive/NomineeDetails/nominee";
import NomineeDetails2 from "./Componentive/NomineeDetails2/nomdetail";
import ShowGif from "./Componentive/HappyNew/happynew";
import GifStore from "./Componentive/HappyNew/GifImage/gif";
export default function Router() {
  const routes = useRoutes([
    {
      path: "",
      element: <SignUp />,
    },
    {
      path: "confirmOTP",
      element: <OtpMobile />,
    },
    {
      path: "loginDetails",
      element: <LoginPage />,
    },
    {
      path: "confirmEmailOtp",
      element: <EmailOtp />,
    },
    {
      path: "panData",
      element: <PanDetails />,
    },
    {
      path: "kycVerification",
      element: <AdharKyc />,
    },
    {
      path: "fetchedAdhar",
      element: <AdharInformation />,
    },
    {
      path: "personalData",
      element: <AboutPerson />,
    },
    {
      path: "tradingPreference",
      element: <TradingPreference />,
    },
    {
      path: "riskDisclosure",
      element: <RiskDerivatives />,
    },
    {
      path: "bankSection",
      element: <AddingBank />,
    },
    {
      path: "upiSection",
      element: <UpiPayment />,
    },
    {
      path: "banklinkSection",
      element: <BankAccountLink />,
    },
    {
      path: "newbankSection",
      element: <NewBank />,
    },
    {
      path: "nomineeSection",
      element: <NomineeDetails />,
    },
    {
      path: "nomine2Section",
      element: <NomineeDetails2 />,
    },
    {
      path: "happySection",
      element: <ShowGif />,
    },
    {
      path: "gifSection",
      element: <GifStore />,
    },
  ]);

  return routes;
}
