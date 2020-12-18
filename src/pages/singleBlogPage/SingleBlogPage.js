import React from "react";
import "./SingleBlogPage.css";
import blog1 from "../../assets/blog1.svg";
import blog2 from "../../assets/blog2.svg";
import BlogCardMain from "../../components/blogCardMain/BlogCardMain";
import Footer from "../../components/footer/Footer";
function SingleBlogPage(props) {
  console.log(props.match);
  return (
    <React.Fragment>
      <div className="blog-id-container">
        <div className="date">
          <p>10th</p>
          <p>September, 2020</p>
        </div>
        <div className="content">
          <h3>BLOG NAME</h3>
          <img src={blog1} alt="blog1" />
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <img className="img2" src={blog2} alt="blog2" />
          <caption className="caption">This is a photo from Unsplash</caption>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="tags">
            <p>Tags : </p>
            <button>Just a tag</button>
            <button>Just a tag</button>
            <button>Just a tag</button>
            <button>Just a tag</button>
          </div>
        </div>
      </div>
      <div className="related-blog-container">
        <h2>Related blogs</h2>
        <div className="blogs-container">
          <BlogCardMain
            date="10th Sep, 2020"
            title="Blog name"
            content="The text goes here, don't have the time to write a story, so bear with me. It'll be a longggggg paragraph so you all can sit back get some chips and beer and enjoy the movie this is something to look for so we all can have a good time around."
          />
          <BlogCardMain
            date="10th Sep, 2020"
            title="Blog name"
            content="The text goes here, don't have the time to write a story, so bear with me. It'll be a longggggg paragraph so you all can sit back get some chips and beer and enjoy the movie this is something to look for so we all can have a good time around."
          />
          <BlogCardMain
            date="10th Sep, 2020"
            title="Blog name"
            content="The text goes here, don't have the time to write a story, so bear with me. It'll be a longggggg paragraph so you all can sit back get some chips and beer and enjoy the movie this is something to look for so we all can have a good time around."
          />
        </div>
        <button>View more blogs</button>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default SingleBlogPage;
