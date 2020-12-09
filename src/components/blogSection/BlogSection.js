import React, { useRef, useEffect } from "react";
import "./BlogSection.css";
import blogs from "../../assets/blogs.svg";
import BlogCard from "../blogCard/BlogCard";
import likeReact from "../../assets/likeReact.svg";
import profile1 from "../../assets/profile-1.jpg";
import profile2 from "../../assets/profile-2.jpg";

import { Carousel } from "bootstrap";
function BlogSection() {
  const cards = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => showSlide(), 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  let slideIndex = 0;
  const showSlide = () => {
    var i;
    var slides = document.getElementsByClassName("testimonial");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
  };

  return (
    <div className="blogs-container">
      <div className="blogs-section">
        <div className="heading">
          <h2>BLOGS</h2>
        </div>
        <div className="blogs-content">
          <div className="section1">
            <img src={blogs} />
          </div>
          <div className="section2">
            <div className="cards">
              <div className="box">
                <BlogCard
                  name="BLOG NAME"
                  content="This article covers the subject of real-time website personalization both from a key point of view and from a technical stance including a few contemplations for google optimize."
                />
                <BlogCard
                  name="BLOG NAME"
                  content="This article covers the subject of real-time website personalization both from a key point of view and from a technical stance including a few contemplations for google optimize."
                />
                <BlogCard
                  name="BLOG NAME"
                  content="This article covers the subject of real-time website personalization both from a key point of view and from a technical stance including a few contemplations for google optimize."
                />
                <BlogCard
                  name="BLOG NAME"
                  content="This article covers the subject of real-time website personalization both from a key point of view and from a technical stance including a few contemplations for google optimize."
                />
                <BlogCard
                  name="BLOG NAME"
                  content="This article covers the subject of real-time website personalization both from a key point of view and from a technical stance including a few contemplations for google optimize."
                />
                <button>More Blogs</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review">
        <div className="img-box">
          <img src={likeReact} />
        </div>
        <div className="testimonial" ref={cards}>
          <h4>Awesome way</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="profile">
            <div className="img-box">
              <img src={profile1} />
            </div>
            <div>
              <h4>John Doe</h4>
              <p>CEO, the wagon</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <h4>Different Ecosystem</h4>
          <p>
            Aenean aliquam laoreet justo, eget mattis augue imperdiet quis.
            Donec eget nulla nunc. Nullam dapibus dolor a tellus fringilla
            cursus. Sed et nisi ante. In lobortis nec lectus at eleifend.
            Pellentesque egestas mattis tortor ut tristique.
          </p>
          <div className="profile">
            <div className="img-box">
              <img src={profile2} />
            </div>
            <div>
              <h4>Max William</h4>
              <p>MD, the wagon</p>
            </div>
          </div>
        </div>
      </div>
      <div className="explore">
        <p>It was an amazing journey discover our company</p>
        <button>Know more</button>
      </div>
    </div>
  );
}

export default BlogSection;
