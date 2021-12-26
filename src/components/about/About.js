import React from "react";
import Me from "../img/me.jpg";
import "./About.css";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          Its losjghh ds sgj bjhsgdh a bsdgfhjadhg b sggfhjjhgds sdhgs.
        </p>
        <p className="a-desc">
          nfm kjgbsfdgk jhjsfdbgjh ag badghghfdshgkjasdfhg kahgh adkghagkj
          hajdhgs kjhadjhadlkjghhdg ads
        </p>
      </div>
    </div>
  );
}

export default About;
