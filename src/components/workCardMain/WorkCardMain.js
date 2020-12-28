import React from "react";
import { Link } from "react-router-dom";
import "./WorkCardMain.css";
function WorkCardMain(props) {
  const { date, title, content, to } = props;
  return (
    <React.Fragment>
      <Link className="Blog-Card2" to={to}>
        <h5>{date}</h5>
        <h2>{title}</h2>
        <p>{content}</p>
        {/* <a href="#">Read More</a> */}
      </Link>
    </React.Fragment>
  );
}

export default WorkCardMain;
