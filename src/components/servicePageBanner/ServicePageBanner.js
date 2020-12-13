import React from "react";
import tag from "../../assets/tag-service.svg";
import SocialMedia from "../socialMedia/SocialMedia";
import { motion } from "framer-motion";
import "./ServicePageBanner.css";
function ServicePageBanner() {
  return (
    <div className="Service-Banner-Container">
      <div className="Service-Banner-Section">
        <div className="section1">
          <div className="heading">
            <h3>Tag</h3>
            <h3>Management</h3>
            <p>
              With my knowledge in both design and technology I foster
              productive te ams in an collaborative environment that meets the
              requirements of eatives and developers at the same time.
            </p>
            <button>Watch a video</button>
          </div>
        </div>
        <div className="section2">
          <div className="img-box">
            <img src={tag} alt="tag" />
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
