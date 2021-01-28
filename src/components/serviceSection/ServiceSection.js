import React from "react";
import { Link } from "react-router-dom";
import "./serviceSection.css";

function ServiceSection(props) {
  let { services } = props;
  return (
    <div className="service-container">
      <div className="service-section">
        <h2>SERVICES</h2>
        <div className="services">
          {
            services.length?services.map((data, index) => (
              <div className="service-box" key={index}>
                <Link to={`/service/${data.permalink}`}>
                <div className="img-box">
                  <img src={data.featuredImage} alt="tag" />
                </div>
                <h3>{data.title}</h3>
                {/* <p>{data.title}</p> */}
                </Link>
              </div>
            )):null
          }
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
