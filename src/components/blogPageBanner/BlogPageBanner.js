import React from "react";
import SocialMedia from "../socialMedia/SocialMedia";
// import blog from "../../assets/blog.svg";

import "./BlogPageBanner.css";
function BlogPageBanner() {
  return (
    <div className="Blog-Banner-Container">
      <div className="Blog-Banner-Section">
        <div className="section1">
          <div className="heading">
            <h3 style={{ color: "#f6861f" }}>Articles</h3>
            <p>
              Digital marketing, Data analytics, insights, overlook,
              understandings. Every readings required is here.
            </p>
          </div>
        </div>
        {/* <div className="section2">
          <div className="img-box">
            <img src={blog} alt="blog" />
          </div>
        </div> */}
        <div className="section3">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default BlogPageBanner;
