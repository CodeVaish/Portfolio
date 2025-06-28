import React from "react";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import resumeFile from "../../assets/resume.pdf"; // adjust the path if needed

const Education = () => {
  return (
    <section>
      <div className="education" id="education">
        <div className="education-title">
          <h1> My Education </h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="list">
          <div id="one">
            <i className="bx bxs-pencil"></i>
            <h2>Foundational Studies</h2>
            <p className="para-edu">
              I scored 79.40% in 10th and was 2nd topper in my school. Later, I
              completed 12th with 72%. My interest in technology started during
              school...
            </p>
            <a href={resumeFile} className="read" download>
              more details about
            </a>
          </div>

          <div>
            <i className="bx bx-pen"></i>
            <h2>Bachelor Computer Applications</h2>
            <p className="para-edu">
              Completed BCA with First Division, gaining a strong foundation in
              programming, software development, and real-world coding skills...
            </p>
            <a href={resumeFile} className="read" download>
              more details about
            </a>
          </div>

          <div id="two">
            <i className="bx bx-laptop" style={{ color: "#ffffff" }}></i>
            <h2>Master of Computer Applications</h2>
            <p className="para-edu">
              Currently pursuing MCA from KDK College of Engineering, building
              strong technical foundations while gaining real-world industry
              experience...
            </p>
            <a href={resumeFile} className="read" download>
              more details about
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
