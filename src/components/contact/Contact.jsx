import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c85b633c-a538-4899-8417-53700455364b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Have a project in mind or want to work together? I'm always open to
            new opportunities and meaningful conversations.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} />
              <a
                href="mailto:ayushishobhane@gmail.com"
                target="_blank"
                className="contact-link"
              >
                <p>ayushishobhane@gmail.com</p>
              </a>
            </div>

            <div className="contact-detail">
              <img src={location_icon} />
              <a
                href="https://www.google.com/maps/place/Nagpur,+Maharashtra+440002"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <p>Nagpur-440002</p>
              </a>
            </div>

            <div className="contact-detail">
              <i className="fa-brands fa-github"></i>
              <a
                href="https://github.com/CodeVaish"
                target="_blank"
                rel=""
                className="contact-link"
              >
                <p>CodeVaish</p>
              </a>
            </div>
            <div className="contact-detail">
              <i className="fa-brands fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/vaishnavi-shobhane-3a9ab4287/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <p>Vaishnavi Shobhane</p>
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            required
            minLength="3"
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Enter your message"
            required
            minLength="10"
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
