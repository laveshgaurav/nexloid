import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual, connect } from "react-redux";
import CareerPageBanner from "../../components/careerPageBanner/CareerPageBanner";
import CareerPosition from "../../components/careerPosition/CareerPosition";
import Footer from "../../components/footer/Footer";
import "./CareerPage.css";

import { fetchAllCareers, toggleCareerForm } from "../../redux/actions/actions";
import PageHelmet from "../../components/pageHelmet";
import CareerApply from "../../components/careerApply/CareerApply";

function CareerPage(props) {
  const { allCareers } = useSelector(
    ({ nexloid }) => ({
      allCareers: nexloid.allCareers,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCareers());
  }, [dispatch]);

  return (
    <React.Fragment>
      <PageHelmet
        title="Nexloid: Digital Analytics Agency - Careers"
        author="Nexloid"
        description="Digital Analytics Agency"
        twTitle="Nexloid: Digital Analytics Agency - Careers"
        twUrl="https://nexloid.com/career"
        twDescription="Nexloid: Digital Analytics Agency - Google and Adobe Analytics Specialist"
        twImage=""
        ogTitle="Nexloid: Digital Analytics Agency - Careers"
        ogType="website"
        ogUrl="https://nexloid.com/career"
        ogImage=""
        ogDescription="Nexloid: Digital Analytics Agency - Google and Adobe Analytics Specialist"
      />
      <CareerPageBanner />
      <div className="position-accordion">
        {allCareers.length
          ? allCareers.map((data, index) => (
              <CareerPosition
                title={data.positionName}
                content={data.jobDescription}
                open={props.toggleCareerForm}
              />
            ))
          : null}
      </div>
      {props.careerForm ? <CareerApply close={props.toggleCareerForm} /> : null}

      <Footer />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    careerForm: state.nexloid.careerForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCareerForm: () => dispatch(toggleCareerForm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CareerPage);
