import React, { useState } from "react";
import "../Styles/EmailInput.css";
import "../Styles/TextBody.css";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const EmailInput = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
  };

  return (
    <>
      <div className="email-input-container">
        <form onSubmit={handleSubmit}>
          <input
            className="email-input"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="email-input-button">
            Send
          </button>
        </form>
        <div className="socialMedia">
          <a href="https://discord.gg/FZqqjNWx">
            <div className="socialMediaHover">
              <FaDiscord size="5vh" color="white" />
            </div>
          </a>
          <div className="socialMediaHover">
            <a href="https://twitter.com/fundprotocol">
              <FaTwitter size="5vh" color="white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailInput;
