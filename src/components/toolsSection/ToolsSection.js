import React from "react";
import "./ToolsSection.css";
function ToolsSection() {
  return (
    <div className="tools-container">
      <div className="tools-section">
        <div className="heading">
          <h2>TOOLS</h2>
        </div>
        <div className="tools-content">
          <div className="box">
            <div className="circle"></div>
            <h3>Nexa</h3>
            <p>Operational tool</p>
          </div>
          <div className="box">
            <div className="circle"></div>
            <h3>Organic</h3>
            <p>Coming Soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsSection;
