import React from "react";
import "./ServiceTool.css";

function ServiceTool(props) {
  let { tools, title } = props;
  console.log("tools", tools);
  return (
    <div className="ServiceTools-Container">
      <div className="ServiceTools-Section">
        <h3>{props.title?props.title:`Tools required`}</h3>
        <div className="features">
          {
              tools.length?tools.map((tool, i) => (
                <div className="box" key={i}>
                  <div className="img-box">
                    <img src={tool.toolImage} alt={tool.toolName} />
                  </div>
                  <h4>{tool.toolName}</h4>
                  <p>{tool.toolDescription}</p>
                </div>
              )):null
          }          
        </div>
      </div>
    </div>
  );
}

export default ServiceTool;
