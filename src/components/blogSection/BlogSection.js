import React, { useRef, useEffect } from "react";
import {withRouter} from 'react-router-dom';
import "./BlogSection.css";
import blogs from "../../assets/blogs.svg";
import BlogCard from "../blogCard/BlogCard";
import likeReact from "../../assets/likeReact.svg";
// import profile1 from "../../assets/profile-1.jpg";
// import profile2 from "../../assets/profile-2.jpg";

function BlogSection(props) {
  const cards = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => showSlide(), 4000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  let nextPath = (path) => {
    props.history.push(path)
  }

  let { articles } = props;

  return (
    <div className="blogs-container">
      <div className="blogs-section">
        <div className="heading">
          <h2>ARTICLES</h2>
        </div>
        <div className="blogs-content">
          <div className="section1">
            <img src={blogs} alt="blogs" />
          </div>
          <div className="section2">
            <div className="cards">
              <div className="box">
                {
                  articles.length?articles.map((data, index)=>(
                    <BlogCard
                      name={data.title}
                      content={data.summary.substring(0,200)+'...'}
                      permalink={data.permalink}
                      key={index}
                    />
                  )):null
                }
                <button onClick={()=>nextPath('/articles')}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="review">
        <div className="heading">
          <h2>FROM OUR CLIENTELLE</h2>
        </div>
        <div className="img-box">
          <img src={likeReact} alt="likeReact" />
        </div>
        <div className="testimonial" ref={cards}>
          {/* <h4>Awesome way</h4> */}
          <p>
          Nexloid has always remained a preferred partner for my team, the team at Nexloid not just has exceptional technical knowledge but also great sense of team work. The reports and solutions they offer are very easy to comprehend for even the non tech members also.
          </p>
          <div className="profile">
            {/* <div className="img-box">
              <img src={profile1} alt="profile1" />
            </div> */}
            <div>
              <h4>Sunil Penugonda</h4>
              <p>Vice President, Dentsu Web Chutney</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          {/* <h4>Different Ecosystem</h4> */}
          <p>
          We are really happy the way they build us the dashboards in our power bi tool, the best team to work with.
          </p>
          <div className="profile">
            {/* <div className="img-box">
              <img src={profile2} alt="profile2" />
            </div> */}
            <div>
              <h4>Aditya</h4>
              <p>Marketing Head, Nilgiris Food Limited</p>
            </div>
          </div>
        </div>
       
      
      </div>
     
      <div className="explore">
        <p>
          Ready to work with us?
          <br/>
          <span>Assisting and reporting you with the queries.</span>
        </p>
        <button onClick={props.contactPop}>Get started!</button>
      </div>
    </div>
  );
}

export default withRouter(BlogSection);
