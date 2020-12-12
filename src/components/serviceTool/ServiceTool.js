import React from "react";
import "./ServiceTool.css";
import optimize from "../../assets/optimize.png";
import google from "../../assets/google.png";
import adobe from "../../assets/adobe.png";

function ServiceTool() {
  return (
    <div className="ServiceTools-Container">
      <div className="ServiceTools-Section">
        <h3>Tools required</h3>
        <div className="features">
          <div className="box">
            <div className="img-box">
              <img src={optimize} alt="optimize" />
            </div>
            <h4>Optimizely</h4>
            <p>Great testing tool for both backend</p>
            <p>and frontend.</p>
          </div>
          <div className="box">
            <div className="img-box">
              <img src={adobe} alt="adobe" />
            </div>
            <h4>Adobe Target</h4>
            <p>Most advanced AI based personalization</p>
            <p>and testing tool.</p>
          </div>
          <div className="box">
            <div className="img-box">
              <img src={google} alt="google" />
            </div>
            <h4>Google Optimize</h4>
            <p>A starter and a few AB testing tools</p>
            <p>by Google.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceTool;
