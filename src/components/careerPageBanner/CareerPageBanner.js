import React from "react";
import career from "../../assets/career.svg";
import SocialMedia from "../socialMedia/SocialMedia";
import "./CareerPageBanner.css";
function CareerPageBanner() {
  return (
    <div className="career-Banner-Container">
      <div className="career-Banner-Section">
        <div className="section1">
          <div className="heading">
            <h3>
              <span style={{ color: "#f6861f" }}>Want to part</span> be of
            </h3>
            <h3>our family?</h3>
            <p>
            We are always on the lookout for a member to join the quest on achieving the greater goal. The client!
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="img-box">
            <img src={career} alt="career" />
          </div>
        </div>
        <div className="section3">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default CareerPageBanner;
