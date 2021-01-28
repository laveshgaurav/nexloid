import React from "react";
import "./ToolsSection.css";
import nexa from '../../assets/nexa.svg';
import organic from '../../assets/organic.svg';
function ToolsSection() {
  return (
    <div className="tools-container">
      <div className="tools-section">
        <div className="heading">
          <h2>OUR PRODUCTS</h2>
        </div>
        <div className="tools-content">
          <div className="box">
            <img src={nexa} alt="operational tool from nexloid"/>
            {/* <h3>Nexa</h3> */}
            <p>Operational tool</p>
          </div>
          <div className="box">
            <img src={organic} alt="all in one seo tool from nexloid"/>
            {/* <h3>Organic</h3> */}
            <p>Coming Soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsSection;
