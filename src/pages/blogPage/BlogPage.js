import React from "react";
import BlogCardMain from "../../components/blogCardMain/BlogCardMain";
import BlogPageBanner from "../../components/blogPageBanner/BlogPageBanner";
import BlogSection from "../../components/blogSection/BlogSection";
import Footer from "../../components/footer/Footer";
import "./BlogPage.css";
function BlogPage() {
  return (
    <React.Fragment>
      <BlogPageBanner />
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
        <BlogCardMain
          date="10th Sep, 2020"
          title="Blog name"
          content="The text goes here, don't have the time to write a story, so bear with me. It'll be a longggggg paragraph so you all can sit back get some chips and beer and enjoy the movie this is something to look for so we all can have a good time around."
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default BlogPage;
