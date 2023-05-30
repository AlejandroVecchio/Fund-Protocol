import React from "react";
import "../Styles/TextBody.css";
import "../App.css";

const TextBody = () => {
  return (
    <>
      <div className=" logo">Fund Protocol</div>
      <div className="title ">
        <span className="gradient">Permissionless </span>and{" "}
        <span className="gradient">Open</span> Constant Weighted Indices
      </div>
      <div className="bodyText">
        Introducing a new financial primitive to the world of Decentralized
        Finance – Fund Protocol brings you permissionless constant weighted
        index tokens. Our platform empowers any DeFi user to create and deploy
        their own custom constant weighted index.
      </div>
      <div className="bodyText">
        Join our growing community to stay updated on the latest developments
        and take part in the future of decentralized finance with Fund Protocol.
      </div>
    </>
  );
};

export default TextBody;
