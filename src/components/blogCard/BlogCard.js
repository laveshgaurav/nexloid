import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";
function BlogCard(props) {
  let { name, content, permalink } = props;
  return (
    <div className="blogCard-container">
      <h3>{name}</h3>
      <p>{content}</p>
      <Link to={`/blogs/${permalink}`}>Read more</Link>
    </div>
  );
}

export default BlogCard;
