import React from "react";
import "./HomePage.css";
import img1 from "../../assets/img1.svg";
import img3 from "../../assets/img3.svg";
import BlogCard from "../../components/blogCard/BlogCard";
import ServiceSection from "../../components/serviceSection/ServiceSection";
import WorkSection from "../../components/workSection/WorkSection";
import ToolsSection from "../../components/toolsSection/ToolsSection";
import BlogSection from "../../components/blogSection/BlogSection";
import Footer from "../../components/footer/Footer";

function HomePage() {
  return (
    <div className="Home-Container">
      <div className="Home-Section">
        <div className="section1">
          <div className="heading">
            <h3>Analysing sites to</h3>
            <h3>help your business</h3>
            <p>
              Our team is here to help you with the necessary data to help run
              your business better.
            </p>
            <button>GET IN TOUCH</button>
          </div>
        </div>
        <div className="section2">
          <div className="img-box">
            <img src={img1} />
          </div>
        </div>
        <div className="section3">
          <span>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </span>
          <span>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </span>
          <span>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </span>
        </div>
      </div>
      <div className="Intro">
        <div className="section2">
          <div className="img-box">
            <img src={img3} alt="img3" />
          </div>
        </div>
        <div className="section1">
          <div className="heading">
            <h3>Basic introduction of who</h3>
            <h3>
              we're as a <span style={{ color: "#3685c3" }}>company</span>
            </h3>
            <p>
              With more than a decade of experience I tackle a broad variety of
              disciplines in the process of creating meaningful products that
              make a real difference. With carefully selected tools and skills I
              express my visions ranging from product design to the creation of
              user experience up to development and delivery. My distinctive
              strategic thinking helps me to pinpoint the holistic scope of a
              product and evolve it by adding new business ideas, innovations
              and values that meet user needs as well as business objectives.
              Besides building user flows, information architecture and
              wireframes, tailor-made interactive prototypes are constantly
              putting concepts and ideas to the test and emphasize the
              user-centered approach in my work. I work with the latest
              techniques in web development and my agile workflow is the result
              of the precisely combined tools and strategies that include object
              oriented patterns, build scripts, pre-processors and minification,
              source code management, testing as well as deployment. With my
              knowledge in both design and technology I foster productive teams
              in an collaborative environment that meets the requirements of
              creatives and developers at the same time.
            </p>
          </div>
        </div>
      </div>
      <ServiceSection />
      <ToolsSection />
      <WorkSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default HomePage;