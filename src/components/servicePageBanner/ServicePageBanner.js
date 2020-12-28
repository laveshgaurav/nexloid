import React from "react";
import SocialMedia from "../socialMedia/SocialMedia";
import "./ServicePageBanner.css";
function ServicePageBanner(props) {
  return (
    <div className="Service-Banner-Container">
      <div className="Service-Banner-Section">
        <div className="section1">
          <div className="heading">
            <h3>{props.head1}</h3>
            <h3>{props.head2}</h3>
            <p>{props.para}</p>
            <button>Watch a video</button>
          </div>
        </div>
        <div className="section2">
          <div className="img-box">
            <img src={props.image} alt="tag" />
          </div>
        </div>
        <div className="section3">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default ServicePageBanner;
