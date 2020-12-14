import React from "react";
import AboutUs from "../../assets/aboutUs.svg";
import cloud from "../../assets/cloud.svg";
import teams from "../../assets/teams.svg";
import project from "../../assets/project.svg";

import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "./AboutUsPage.css";
function AboutUsPage() {
  return (
    <div className="AboutUs-Container">
      <div className="AboutUs-Section">
        <div className="section1">
          <div className="heading">
            <h3>
              Experts in <span style={{ color: "#f6861f" }}>Data</span>
            </h3>
            <h3>
              & <span style={{ color: "#f6861f" }}>Digital, </span>How?
            </h3>
            <p>
              Designers is the sum of 45 happy, wild, spirited, shy, geeky,
              artsy and fun team members. Our agency strives to create emotional
              and meaningful stories, which in turn become fantastic digital
              experiences.
            </p>
            <button>See our expertise</button>
          </div>
        </div>
        <div className="section2">
          <div className="img-box">
            <img src={AboutUs} alt="about us" />
          </div>
        </div>
        <div className="section3">
          <SocialMedia />
        </div>
      </div>
      <div className="team AboutUs-Section">
        <div className="section2">
          <div className="img-box">
            <img src={teams} alt="teams" />
          </div>
        </div>
        <div className="section1">
          <div className="heading">
            <h3>Our Team</h3>

            <p>
              Designers is the sum of 45 happy, wild, spirited, shy, geeky,
              artsy and fun team members. Our agency strives to create emotional
              and meaningful stories, which in turn become fantastic digital
              experiences.
            </p>
            {/* <button>GET IN TOUCH</button> */}
          </div>
        </div>
      </div>
      <div className="AboutUs-Section">
        <div className="section2">
          <div className="img-box">
            <img src={cloud} alt="cloud" />
          </div>
        </div>
        <div className="section1">
          <div className="heading">
            <h3>
              The <span style={{ color: "#f6861f" }}>Data driven</span> world
            </h3>
            <h3>could be maddening!</h3>
            <p>
              Designers is the sum of 45 happy, wild, spirited, shy, geeky,
              artsy and fun team members. Our agency strives to create emotional
              and meaningful stories, which in turn become fantastic digital
              experiences.
            </p>
            <button>GET IN TOUCH</button>
          </div>
        </div>
      </div>
      <div className="text-banner">
        <h4>
          Serving <span style={{ color: "#f6861f" }}>data</span> in the most
        </h4>
        <h4>simplest form to boost your</h4>
        <h4>services.</h4>
      </div>
      <div className="AboutUs-Section">
        <div className="section1">
          <div className="heading">
            <h3>Looking for more ?</h3>
            <p>
              Designers is the sum of 45 happy, wild, spirited, shy, geeky,
              artsy and fun team members. Our agency strives to create emotional
              and meaningful stories, which in turn become fantastic digital
              experiences.
            </p>
            <button>Explore our projects</button>
          </div>
        </div>
        <div className="section2">
          <div className="img-box">
            <img src={project} alt="project" />
          </div>
        </div>
      </div>
      <div className="right-text text-banner">
        <h4>
          <span style={{ color: "#f6861f" }}>Inspired to work with us?</span>
        </h4>
        <p>Write to us @mail.id@gmail.com</p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
