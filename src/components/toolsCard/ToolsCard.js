import React from "react";
import "./ToolsCard.css";

function ToolsCard(props) {
  return (
    <div className="tool-card-box">
      <h3>STEP</h3>
      <h2>{props.step}</h2>
      <h4>{props.method}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>
    </div>
  );
}

export default ToolsCard;
