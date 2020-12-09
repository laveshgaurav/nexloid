import React from "react";
import "./BlogCard.css";
function BlogCard(props) {
  return (
    <div className="blogCard-container">
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <a href="#">Read more</a>
    </div>
  );
}

export default BlogCard;
