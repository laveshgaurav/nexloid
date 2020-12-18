import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";
function BlogCard(props) {
  return (
    <div className="blogCard-container">
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <Link>Read more</Link>
    </div>
  );
}

export default BlogCard;
