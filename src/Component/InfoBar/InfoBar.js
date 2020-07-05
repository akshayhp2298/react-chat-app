import React from "react";

import closeIcon from "../../Icons/closeIcon.png";
import onlineIcon from "../../Icons/onlineIcon.png";

import "./InfoBar.css";

const InfoBar = ({ room, users }) => {
  let userText = "";
  users.map(u => (userText += ` ${u.name},`));
  userText = userText.substring(0, userText.length - 1);
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="Online" />
        <h3>{room}</h3>
      {/* <div style={{ align:'left',color: "white",'overflow-x': 'scroll' }}>{userText}</div> */}
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="Close" />
        </a>
      </div>
    </div>
  );
};
export default InfoBar;
