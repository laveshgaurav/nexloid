import React from "react";
import "./ToolsCard.css";

function ToolsCard(props) {
  return (
    <div className="tool-card-box">
      <h3>{props.step}</h3>
      <h4>{props.method}</h4>
      <p>
        {props.text}
      </p>
    </div>
  );
}

export default ToolsCard;
