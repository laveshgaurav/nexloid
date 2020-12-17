import React from "react";
import "./BlogCardMain.css";
function BlogCardMain(props) {
  const { date, title, content } = props;
  return (
    <div className="Blog-Card2">
      <h5>{date}</h5>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default BlogCardMain;
