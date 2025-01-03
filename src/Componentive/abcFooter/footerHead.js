import React from "react";
import  logoPic from "./logoPic.png";

const FooterHead = () => {
    return (
        <div className="headerOn">
        <div className="headerMode">
          <div className="devLogo">
            <img src={logoPic} className="devSymbol" />
          </div>
          <div className="devDash">
            <p> Firstock.</p>
          </div>
        </div>
      </div>
    );
};
export default FooterHead;