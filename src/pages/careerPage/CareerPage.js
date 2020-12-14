import React from "react";
import CareerPageBanner from "../../components/careerPageBanner/CareerPageBanner";
import CareerPosition from "../../components/careerPosition/CareerPosition";
import Footer from "../../components/footer/Footer";
import "./CareerPage.css";
function CareerPage() {
  return (
    <React.Fragment>
      <CareerPageBanner />
      <div className="position-accordion">
        <CareerPosition
          title="Backend Developer"
          content="Backend Developer-A short paragraph on how you hire or are always on a lookout for marketing persons.A short paragraph on how you hire or are always on a lookout for marketing persons"
        />
        <CareerPosition
          title="Senior Analyst"
          content="Senior Analyst-A short paragraph on how you hire or are always on a lookout for marketing persons."
        />
        <CareerPosition
          title="Business Operation"
          content="Business Operation-A short paragraph on how you hire or are always on a lookout for marketing persons."
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default CareerPage;
