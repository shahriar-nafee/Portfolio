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
        <p className="a-sub">A curiosity-driven Front-End Developer.</p>
        <p className="a-desc">
          I’m a talented Product Designer with front end development skills. I
          am passionate about leveraging my diverse backgrounds to decipher
          challenging problems and create delightful experiences. I honed my
          skills at web development.
        </p>
      </div>
    </div>
  );
}

export default About;
