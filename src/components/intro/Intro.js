import React from "react";
import "./Intro.css";
import resume from "../img/Resume of SHAHRIAR NAFEE.pdf";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div>
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Shahriar Nafee</h1>
          </div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">React Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <a href={resume} download>
            <button className="rs-btn">RESUME</button>
          </a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">red</div>
      </div>
    </div>
  );
}

export default Intro;
