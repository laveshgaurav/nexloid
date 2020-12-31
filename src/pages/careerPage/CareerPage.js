import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import CareerPageBanner from "../../components/careerPageBanner/CareerPageBanner";
import CareerPosition from "../../components/careerPosition/CareerPosition";
import Footer from "../../components/footer/Footer";
import "./CareerPage.css";

import { fetchAllCareers } from '../../redux/actions/actions';
import PageHelmet from '../../components/pageHelmet';

function CareerPage() {
  const { allCareers } = useSelector(({nexloid}) => ({
    allCareers: nexloid.allCareers
  }), shallowEqual);

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
        {
          allCareers.length?allCareers.map((data, index) => (
            <CareerPosition
              title={data.positionName}
              content={data.jobDescription}
            />
          )):null
        }
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default CareerPage;
