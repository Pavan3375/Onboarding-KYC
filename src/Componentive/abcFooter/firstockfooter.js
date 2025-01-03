import React from "react";
import footerlogo from "./footerLogo.png";
import rocketImage from "./rocketImage.png";
import playstoreImage from "./playstoreImage.png";
import appsstoreImage from "./appsstoreImage.png";
import socialIcon from "./SocialIcons.png";

const FooterRobo = () => {
    return (
        <div className="wrapHeader">
        <div className="footerSub">
          <div className="footerWrite">
            <div className="infoElement">
              <div className="footerSection">
                <img src={footerlogo} className="wrapperDot" />
              </div>
              <div className="footerStock">
                <p> FIRSTOCK</p>
              </div>
            </div>
            <div className="ncoInfo">
              <p>NCO Securities and Share Broking Pvt Ltd</p>
            </div>
            <div className="addressSection">
              <p>
                No 350,1st Floor, 36th A Cross 7th Main Rd 5th Block Jayanagar,
                Bengaluru, KA 560041.
              </p>
            </div>
            <div className="pvtLmt">
              <p>
                NCO Securities and Share Broking (P) Ltd: Member of NSE,BSE
                :SEBI Single Registration No. for NSE, BSE CM, NFO segment:
                INZ000260334 | Smart Online Dispute Resolution | SEBI SCORES
              </p>
            </div>
            <div className="emailSection">
              <p>Email us</p>
            </div>
            <div className="emailId">
              <p>sales@firstock.com</p>
            </div>
            <div className="socialBox">
              <img src={socialIcon} className="socialIngo" />
            </div>
          </div>
          <div className="companyMain">
            <div className="companyInfo">
              <p>
                <b>Company</b>{" "}
              </p>
            </div>
            <div className="businessInfo">
              <p>About Us</p>
              <p>Product</p>
              <p>Pricing & charges</p>
              <p>Sign up</p>
              <p>Login</p>
            </div>
          </div>
          <div className="companyMain">
            <div className="companyInfo">
              <p>
                <b>Resources</b>
              </p>
            </div>
            <div className="businessInfo">
              <p>Brokerage Calculator</p>
              <p>Margin Calculator</p>
              <p>API docs</p>
              <p>Key Generation</p>
            </div>
          </div>
          <div className="companyMain">
            <div className="companyInfo">
              <p>
                <b>Legal</b>
              </p>
            </div>
            <div className="businessInfo">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Label</p>
            </div>
          </div>
          <div className="joinSection">
            <div className="companyMain">
              <div className="companyJoin">
                <p>
                  <b>Join Us</b>
                </p>
              </div>
              <div className="stayData">
                <p>Stay inform about our latest update when it arrives</p>
              </div>
              <div className="flexData">
                <div className="emailInfo">
                  <p>hello@firstock.com</p>
                </div>
                <div className="rocketClass">
                  <img src={rocketImage} className="rocketPic" />
                </div>
              </div>
            </div>
            <div className="googleSection">
              <div className="addsImage">
                <img src={playstoreImage} className="addsPic" />
              </div>
              <div className="adds2Image">
                <img src={appsstoreImage} className="adds2Pic" />
              </div>
            </div>
          </div>
        </div>
        <div className="paraHead">
          <div className="paraSection">
            <p>
              NCO Securities and Share Broking Pvt Ltd: Member of NSE​ &​ BSE –
              SEBI Registration no.: INZ000031633 CDSL: Depository services
              through NCO Securities and Share Broking Pvt Ltd. – SEBI
              Registration no.: IN-DP-431-2019 Commodity Trading through
              Firstock Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
              INZ000038238 Registered Address: NCO Securities and Share Broking
              Pvt Ltd, No 350,1st Floor, 36th A Cross 7th Main Rd 5th Block
              Jayanagar, Bengaluru, KA 560041., India. For any complaints
              pertaining to securities broking please write to 
              <b>complaints@firstock.com </b> , for DP related
              to dp@firstock.com. Please ensure you carefully read the Risk
              Disclosure Document as prescribed by SEBI | ICF
            </p>
          </div>
          <div className="paraSection1">
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
          </div>
          <div className="paraSection2">
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
          </div>
          <div className="paraSection3">
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
          </div>
          <div className="paraSection4">
            <p>
              Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Firstock and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
      
      <div className="separRate">
        <div className="inventData">
          <p>@2023 Firstock All Rights Reserved.</p>
          <p>Terms & Policy</p>
          <p>NSE</p>
          <p>Terms & BSE</p>
          <p>MCX</p>
          <p>Policies & procedures</p>
          <p>Disclosure</p>
          <p>For investor's attention</p>
          <p>Investor charter</p>
        </div>
      </div>
      </div>
    );
};
export default FooterRobo;