import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png.jpg";

const About = () => {
  return (
    <div id="aboutme" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              A passionate web developer with a strong interest in building
              modern, user-friendly websites. Always eager to learn new
              technologies and bring creative ideas life.
            </p>
            <p>
              Currently exploring real-world experience through internships and
              live projects. Dedicated to growing both technically and
              professionally in the world of development.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML </p>
              <hr style={{ "--pct": "90%" }} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ "--pct": "80%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ "--pct": "60%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ "--pct": "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
