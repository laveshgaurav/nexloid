import React from "react";
import "./WorkSection.css";

function WorkSection(props) {
  let { articles } = props;
  return (
    <div className="work-container">
      <div className="work-section">
        <h2>OUR WORKS</h2>
        {
          articles?.length?articles.map((data, index) => (
            <div className="work-box" key={index}>
              {
                index%2!==0?(
                  <div className="img-box">
                    <img src={data.featuredImage} alt={data.title} />
                  </div>
                ):null
              }
              <div className="description">
                <h3>{data.title}</h3>
                <p>
                  {data.summary}
                </p>
                <a href={`/works/${data.permalink}`}>View case study</a>
              </div>
              {
                index%2===0?(
                  <div className="img-box">
                    <img src={data.featuredImage} alt={data.title} />
                  </div>
                ):null
              }
            </div>
          )):null
        }
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
