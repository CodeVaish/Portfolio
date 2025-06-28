import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/profile_img.jpg";
import resumeFile from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span> It's Me VAISHNAVI </span> And I'm a Web Developer
      </h1>
      <p>
        Designing with purpose, coding with passion. Turning ideas into
        interactive realities.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resumeFile} download="resume" className="resume-link">
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
