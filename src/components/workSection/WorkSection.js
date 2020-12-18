import React from "react";
import "./WorkSection.css";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import { Link } from "react-router-dom";

function WorkSection() {
  return (
    <div className="work-container">
      <div className="work-section">
        <h2>OUR WORKS</h2>
        <div className="work-box">
          <div className="description">
            <h3>Article name</h3>
            <p>
              With my knowledge in both design and technology I foster
              productive teams in an collaborative environment that meets the
              requirements of creatives and developers at the same time.
            </p>
            <Link href="#img-box">View case study</Link>
          </div>
          <div className="img-box">
            <img src={work2} alt="work2" />
          </div>
        </div>
        <div className="work-box">
          <div className="img-box">
            <img src={work1} alt="work1" />
          </div>
          <div className="description">
            <h3>Article name</h3>
            <p>
              With my knowledge in both design and technology I foster
              productive teams in an collaborative environment that meets the
              requirements of creatives and developers at the same time.
            </p>
            <Link href="#description">View case study</Link>
          </div>
        </div>
      </div>
      <div className="explore">
        <p>
          We're a group of individual who like to take challenges that's what
          define us
        </p>
        <button>Explore more</button>
      </div>
    </div>
  );
}

export default WorkSection;
