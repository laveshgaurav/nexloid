import React from "react";
import "./serviceSection.css";
import tag from "../../assets/tag.svg";
import cro from "../../assets/cro.svg";
import power from "../../assets/power.svg";
import digital from "../../assets/digital.svg";

function ServiceSection() {
  return (
    <div className="service-container">
      <div className="service-section">
        <h2>SERVICES</h2>
        <div className="services">
          <div className="service-box">
            <div className="img-box">
              <img src={tag} alt="tag" />
            </div>
            <h3>Tag Management</h3>
            <p>Data Collection</p>
          </div>
          <div className="service-box">
            <div className="img-box">
              <img src={cro} alt="cro" />
            </div>
            <h3>CRO</h3>
            <p>Improve your conversions like never before.</p>
          </div>
          <div className="service-box">
            <div className="img-box">
              <img src={power} alt="power" />
            </div>
            <h3>Embrace the power</h3>
            <p>Reporting & visualizational</p>
          </div>
          <div className="service-box">
            <div className="img-box">
              <img src={digital} alt="digital" />
            </div>
            <h3>Digital Development</h3>
            <p>Build your inception.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
