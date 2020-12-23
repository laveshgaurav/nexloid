import React from "react";
import ServicePageBanner from "../../components/servicePageBanner/ServicePageBanner";
import ServiceTool from "../../components/serviceTool/ServiceTool";
import "./ServicePage.css";
import img from "../../assets/8401.jpg";
import Footer from "../../components/footer/Footer";
import business from "../../assets/business-service.svg";
function ServicePageBusiness() {
  return (
    <React.Fragment>
      <ServicePageBanner
        image={business}
        head1="Business"
        head2="Intelligence"
        para="With my knowledge in both design and technology I foster
              productive te ams in an collaborative environment that meets the
              requirements of eatives and developers at the same time."
      />
      <ServiceTool />
      <div className="servicePage-containers">
        <div className="service-box">
          <div className="content">
            <h3>Tag Management and Data Collection</h3>
            <p>
              We modify several different variables for your website and test
              for the version that brings the most valuable traffic and ensures
              higher chances of conversion in the least possible time.
            </p>
          </div>
          <div className="img-box">
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
      <div className="button-container">
        <button>
          Other Services
          <i
            className="fa fa-angle-right"
            aria-hidden="true"
            style={{ marginLeft: "1rem" }}
          ></i>
        </button>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default ServicePageBusiness;
