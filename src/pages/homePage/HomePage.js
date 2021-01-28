import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual, connect } from "react-redux";
import "./HomePage.css";
import img1 from "../../assets/img1.svg";
import img3 from "../../assets/img3.svg";
import ServiceSection from "../../components/serviceSection/ServiceSection";
// import WorkSection from "../../components/workSection/WorkSection";
import ClientSection from "../../components/ourClients/OurClients";
import ToolsSection from "../../components/toolsSection/ToolsSection";
import BlogSection from "../../components/blogSection/BlogSection";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import PageHelmet from "../../components/pageHelmet";

import {
  fetchLatestArticles,
  fetchAllServices,
  toggleContactUs,
} from "../../redux/actions/actions";

function HomePage(props) {
  const { latestArticles, allServices } = useSelector(
    ({ nexloid }) => ({
      latestArticles: nexloid.latestArticles,
      allServices: nexloid.allServices,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestArticles());
    // dispatch(fetchLatestWorks());
    dispatch(fetchAllServices());
  }, [dispatch]);

  return (
    <div className="Home-Container">
      <PageHelmet
        title="Nexloid: Digital Analytics Agency - Google and Adobe Analytics Specialist"
        author="Nexloid"
        description="Digital Analytics Agency"
        twTitle="Nexloid: Digital Analytics Agency - Google and Adobe Analytics Specialist"
        twUrl="https://nexloid.com"
        twDescription="Nexloid: Digital Analytics Agency - Google and Adobe Analytics Specialist"
        twImage=""
        ogTitle="Nexloid: Digital Analytics Agency - Google and Adobe Analytics Specialist"
        ogType="website"
        ogUrl="https://nexloid.com"
        ogImage=""
        ogDescription="Nexloid: Digital Analytics Agency - Google and Adobe Analytics Specialist"
      />
      <div className="Home-Section">
        <div className="section1">
          <div className="heading">
            <h1>
              Analysing sites to <br /> help your business
            </h1>
            <p>
              Our team is here to help you with the necessary data to help run
              your business better.
            </p>
            <button onClick={props.toggleContactUs}>GET IN TOUCH</button>
          </div>
        </div>
        <div className="section2">
          <div className="img-box">
            <img src={img1} alt="img1" />
          </div>
        </div>
        <div className="section3">
          <SocialMedia />
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
            <h3>
              Who we are?
            </h3>
            <p>
            We are a new-generation digital analytics company providing you with the most accurate reports and solutions to your queries. With simple solutions and tools, we brief you with a personalised check plan and assist you drive more traffic to your website.
            </p>
          </div>
        </div>
      </div>
      <ServiceSection services={allServices} />
      <ToolsSection />
      <ClientSection />
      <BlogSection articles={latestArticles} contactPop={props.toggleContactUs}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
