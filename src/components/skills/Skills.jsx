import React from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Skills = () => {
  return (
    <>
      <div id="skills" className="skills">
        <div className="skills-title">
          <h1>Skills</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="container">
          <div className="row">
            {/* Technical Skills */}

            <div className="about-skills">
              <h1 className="heading1">Technical Skills</h1>
              <div className="about-skill">
                <i style={{ color: "#c95d2e" }} className="bx bxl-html5"></i>
                <p>HTML </p>
                <hr style={{ "--pct": "90%" }} />
              </div>
              <div className="about-skill">
                <i style={{ color: "#147bbc" }} className="bx bxl-css3"></i>
                <p>CSS</p>
                <hr style={{ "--pct": "80%" }} />
              </div>
              <div className="about-skill">
                <i
                  style={{ color: "#b0bc1e" }}
                  className="bx bxl-javascript"
                ></i>
                <p>Javascript</p>
                <hr style={{ "--pct": "60%" }} />
              </div>
              <div className="about-skill">
                <i style={{ color: "#69bcbc" }} className="bx bxl-react"></i>
                <p>React Js</p>
                <hr style={{ "--pct": "50%" }} />
              </div>
              <div className="about-skill">
                <i style={{ color: "#69bcbc" }} className="bx bxl-react"></i>
                <p>SQL</p>
                <hr style={{ "--pct": "80%" }} />
              </div>
            </div>

            {/* Professional Skills */}
            <div className="col">
              <div className="container-professional">
                <h1 className="heading1">Professional Skills</h1>
                <div className="redial-bars">
                  {/* Skill 1: Creativity - 90% */}
                  <div className="redial-bar">
                    <svg viewBox="0 0 200 200">
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="1"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#DF8988" />
                          <stop offset="100%" stopColor="#B415FF" />
                        </linearGradient>
                      </defs>
                      <circle
                        className="progress-bar"
                        cx="100"
                        cy="100"
                        r="80"
                      />
                      <circle
                        className="path path-1"
                        cx="100"
                        cy="100"
                        r="80"
                      />
                    </svg>
                    <div className="percentage">90%</div>
                    <div className="text">Creativity</div>
                  </div>

                  {/* Skill 2: Communication - 93% */}
                  <div className="redial-bar">
                    <svg viewBox="0 0 200 200">
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="1"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#DF8988" />
                          <stop offset="100%" stopColor="#B415FF" />
                        </linearGradient>
                      </defs>
                      <circle
                        className="progress-bar"
                        cx="100"
                        cy="100"
                        r="80"
                      />
                      <circle
                        className="path path-2"
                        cx="100"
                        cy="100"
                        r="80"
                      />
                    </svg>
                    <div className="percentage">93%</div>
                    <div className="text">Communication</div>
                  </div>

                  {/* Skill 3: Problem Solving - 75% */}
                  <div className="redial-bar">
                    <svg viewBox="0 0 200 200">
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="1"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#DF8988" />
                          <stop offset="100%" stopColor="#B415FF" />
                        </linearGradient>
                      </defs>
                      <circle
                        className="progress-bar"
                        cx="100"
                        cy="100"
                        r="80"
                      />
                      <circle
                        className="path path-3"
                        cx="100"
                        cy="100"
                        r="80"
                      />
                    </svg>
                    <div className="percentage">75%</div>
                    <div className="text">Problem Solving</div>
                  </div>

                  {/* Skill 4: Teamwork - 90% */}
                  <div className="redial-bar">
                    <svg viewBox="0 0 200 200">
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="1"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#DF8988" />
                          <stop offset="100%" stopColor="#B415FF" />
                        </linearGradient>
                      </defs>
                      <circle
                        className="progress-bar"
                        cx="100"
                        cy="100"
                        r="80"
                      />
                      <circle
                        className="path path-4"
                        cx="100"
                        cy="100"
                        r="80"
                      />
                    </svg>
                    <div className="percentage">90%</div>
                    <div className="text">Teamwork</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
