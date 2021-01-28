import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "../../assets/about-us-header.svg";
import cloud from "../../assets/about-us-cloud.svg";
import teams from "../../assets/teams.svg";
import project from "../../assets/project.svg";

import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";

import "./AboutUsPage.css";
import PageHelmet from "../../components/pageHelmet";
import { connect } from "react-redux";
import { toggleContactUs } from "../../redux/actions/actions";

function AboutUsPage(props) {
  return (
    <div className="AboutUs-Container">
      <PageHelmet
        title="Nexloid: Digital Analytics Agency - About Us"
        author="Nexloid"
        description="Digital Analytics Agency"
        twTitle="Nexloid: Digital Analytics Agency - About Us"
        twUrl="https://nexloid.com"
        twDescription="Nexloid: Digital Analytics Agency - Google and Adobe Analytics Specialist"
        twImage=""
        ogTitle="Nexloid: Digital Analytics Agency - About Us"
        ogType="website"
        ogUrl="https://nexloid.com"
        ogImage=""
        ogDescription="Nexloid: Digital Analytics Agency - Google and Adobe Analytics Specialist"
      />
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
            With data ever evolving, analytics has been one of the most used word in the last decade or so. Nexloid helps you with the data and creates a path to your success.
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
            Here at Nexloid, we are the exact sum of happy, geeky, 'challenge-ready' and fun team members. Our company srives to provide with the best solutions for you to turn around your data.
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
            Data is present in very aspect of our lives and without any correct measures we cannot take advantage of it. We are here to provide with the best possible services for you to take advantage of.
            </p>
            <button onClick={props.toggleContactUs}>GET IN TOUCH</button>
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
            <h3>Getting confused with what services to go for?</h3>
            <p>
            Check out our projects for the final decision!
            </p>
            <Link to="/works">
              <button>Explore our projects</button>
            </Link>
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
        <p>Write to us <a href="mailto:support@nexloid.com">support@nexloid.com</a></p>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contactUs: state.nexloid.contactUs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleContactUs: () => dispatch(toggleContactUs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsPage);
