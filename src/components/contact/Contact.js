import React, { useRef } from "react";
import "./Contact.css";
import Telephone from "../img/telephone.png";
import Mail from "../img/mail.png";
import Location from "../img/location.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const formData = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0sow1lx",
        "template_e5z6r5k",
        formData.current,
        "user_RExh0xIltbw8YWyzYUwE6"
      )
      .then(
        (result) => {
          alert("Your Message has sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title ">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Telephone} alt="phonelogo" className="c-icon" />
              +8801521213572
            </div>
            <div className="c-info-item">
              <img src={Mail} alt="phonelogo" className="c-icon" />
              shahriar.nafee@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Location} alt="phonelogo" className="c-icon" />
              Merul Badda, Dhaka, Bangladesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formData} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button className="btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
