import React from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My latest Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a
              key={index}
              href={work.w_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img key={index} src={work.w_img} alt="" />
            </a>
          );
        })}
      </div>
      <a
        href="https://github.com/CodeVaish?tab=repositories"
        target="_blank"
        rel=""
        className="contact-link"
      >
        <div className="mywork-showmore">
          <p>Show more</p>
          <img src={arrow_icon} alt="" />
        </div>
      </a>
    </div>
  );
};

export default MyWork;
