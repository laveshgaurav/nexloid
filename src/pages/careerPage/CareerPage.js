import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import CareerPageBanner from "../../components/careerPageBanner/CareerPageBanner";
import CareerPosition from "../../components/careerPosition/CareerPosition";
import Footer from "../../components/footer/Footer";
import "./CareerPage.css";

import { fetchAllCareers } from '../../redux/actions/actions';

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
