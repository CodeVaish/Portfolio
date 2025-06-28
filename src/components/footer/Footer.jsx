import React from "react";
import "./Footer.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-vaishnavi">
            <h2>Vaishnavi Shobhane</h2>
            <img src={theme_pattern} alt="" className="vaishnavi-img" />
          </div>
          <p>
            I am a frontend developer, Made with love, and a bit of Ctrl+Z magic
            by Vaishnavi...
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <a
            href="mailto:ayushishobhane@gmail.com"
            target="_blank"
            className="contact-link"
          >
            <div className="footer-subscribe">Email Me</div>
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2023 Vaishnavi Shobhane All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
