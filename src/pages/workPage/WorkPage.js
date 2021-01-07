import React, {useEffect} from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import WorkCardMain from "../../components/workCardMain/WorkCardMain";
import WorkPageBanner from "../../components/workPageBanner/WorkPageBanner";
import Footer from "../../components/footer/Footer";
import "./WorkPage.css";

import PageHelmet from '../../components/pageHelmet';

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
      <PageHelmet
        title="Our Works | Case Studies"
        author="Nexloid"
        description="Our Works | Case Studies"
        twTitle="Nexloid : Case Studies"
        twUrl="https://nexloid.com/works"
        twDescription="Nexloid : Case Studies"
        twImage=""
        ogTitle="Nexloid : Case Studies"
        ogType="blog"
        ogUrl="https://nexloid.com/works"
        ogImage=""
        ogDescription="Nexloid : Case Studies"
      />
      <WorkPageBanner />
      <div className="blogs-container">
        {
          allWorks.length?allWorks.map((data, index) => (
            <WorkCardMain
              date={data.date}
              title={data.title}
              content={data.summary.substring(0, 200)}
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
