import React from "react";
import "./App.css";
import EmailInput from "../src/Components/EmailInput.jsx";
import BlurImages from "./Components/Blur-Images.jsx";
import TextBody from "../src/Components/TextBody.jsx";
import Features from "./Components/Features";

const App = () => {
  return (
    <div className="">
      <BlurImages />
      <div className="bodyContainer">
        <TextBody />
        <EmailInput />
      </div>
      <Features />
    </div>
  );
};

export default App;
