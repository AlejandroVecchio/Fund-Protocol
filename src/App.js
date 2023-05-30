import React from "react";
import "./App.css";
import EmailInput from "../src/Components/EmailInput.jsx";
import BlurImages from "./Components/Blur-Images.jsx";
import TextBody from "../src/Components/TextBody.jsx";
import Features from "./Components/Features";
import BodyImages from "./Assets/images/BodyImage.svg";

const App = () => {
  return (
    <div className="">
      <BlurImages />
      <div className="">
        <div className="mainContainer">
          <div className="middle1">
            <TextBody />
            <EmailInput />
          </div>
          <div className="middle">
            <img src={BodyImages} width="500px" />
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default App;
