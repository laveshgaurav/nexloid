import React, {useEffect} from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import WorkCardMain from "../../components/workCardMain/WorkCardMain";
import WorkPageBanner from "../../components/workPageBanner/WorkPageBanner";
import Footer from "../../components/footer/Footer";
import "./WorkPage.css";

import { fetchAllWorks } from '../../redux/actions/actions';

function BlogPage() {

  const { allWorks } = useSelector(({nexloid}) => ({
    allWorks: nexloid.allWorks
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllWorks());
  }, [dispatch]);

  return (
    <React.Fragment>
      <WorkPageBanner />
      <div className="blogs-container">
        {
          allWorks.length?allWorks.map((data, index) => (
            <WorkCardMain
              date={data.date}
              title={data.title}
              content={data.summary.substring(100)}
              to={'/works/'+data.permalink}
              key={index}
            />
          )):null
        }
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default BlogPage;
