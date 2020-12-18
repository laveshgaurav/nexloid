import React from "react";
import { Link } from "react-router-dom";
import "./BlogCardMain.css";
function BlogCardMain(props) {
  const { date, title, content } = props;
  return (
    <React.Fragment>
      <Link className="Blog-Card2" to="/blogs/1">
        <h5>{date}</h5>
        <h2>{title}</h2>
        <p>{content}</p>
        {/* <a href="#">Read More</a> */}
      </Link>
    </React.Fragment>
  );
}

export default BlogCardMain;
