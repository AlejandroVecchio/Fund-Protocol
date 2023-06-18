import React from "react";
import "../Styles/TextBody.css";
import "../App.css";
import { SiCrystal } from "react-icons/si";
import { FaFly } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { GiDiamondRing } from "react-icons/gi";
import { FaFeatherAlt } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";

const Features = () => {
  return (
    <>
      <div className="masiveContainer">
        <div className="featuresContainer">
          <div className="card features">
            <div className="featuresIcon">
              <SiCrystal className="icon" />
              <div className="featureTitle gradient">Permissionless</div>
            </div>
            Easily create and deploy custom index funds by defining tokens,
            target weights, oracles, and rebalance frequency.
          </div>

          <div className="card features">
            <div className="featuresIcon">
              <FaFly className="icon" />
              <div className="featureTitle gradient">Open</div>
            </div>
            Accessible to any user interested in creating an index fund.
          </div>
          <div className="card features">
            <div className="featuresIcon">
              <GiDiamondRing className="icon" />
              <div className="featureTitle gradient">Trustless</div>{" "}
            </div>
            Funds require no active management or user interaction once
            deployed, as external parties are incentivized to rebalance the
            indices.
          </div>
        </div>
        <div className="featuresContainer">
          <div className="card features">
            <div className="featuresIcon">
              <SiTrustpilot className="icon" />
              <div className="featureTitle gradient">Efficient</div>
            </div>
            MEV-optimized funds foster a competitive environment, enabling low
            rebalance costs.
          </div>
          <div className="card features">
            <div className="featuresIcon">
              <FaFeatherAlt className="icon" color="#B3B0C3" />
              <div className="featureTitle gradient"> Minimal User Costs</div>
            </div>
            The protocol only takes performance fees, eliminating additional
            costs for users while still delivering a powerful DeFi solution.
          </div>
          <div className="card features">
            <div className="featuresIcon">
              <IoIosGitCompare className="icon" />
              <div className="featureTitle gradient"> Composable</div>
            </div>
            Adheres to ERC-3448, ERC-4626, and ERC-1155 standards, enabling
            seamless integration with other platforms and a wide range of
            existing tokens.
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
