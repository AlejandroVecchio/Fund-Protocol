import React from "react";
import "./App.css";
import EmailInput from "../src/Components/EmailInput.jsx";
import BlurImages from "./Components/Blur-Images.jsx";

const App = () => {
  return (
    <div className="screen">
      <BlurImages />
      <EmailInput />
    </div>
  );
};

export default App;
