import React, {useEffect} from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import BlogCardMain from "../../components/blogCardMain/BlogCardMain";
import BlogPageBanner from "../../components/blogPageBanner/BlogPageBanner";
import Footer from "../../components/footer/Footer";
import "./BlogPage.css";

import { fetchAllArticles } from '../../redux/actions/actions';
import PageHelmet from '../../components/pageHelmet';

function BlogPage() {

  const { allArticles } = useSelector(({nexloid}) => ({
    allArticles: nexloid.allArticles
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);

  return (
    <React.Fragment>
      <PageHelmet
        title="Our Blogs | Latest Digital Analytics Contents | Nexloid"
        author="Nexloid"
        description="Latest digital analytics contents by Nexloid"
        twTitle="Latest Digital Analytics Contents"
        twUrl="https://nexloid.com/blogs"
        twDescription="Latest Digital Analytics Contents"
        twImage=""
        ogTitle="Latest Digital Analytics Contents"
        ogType="blog"
        ogUrl="https://nexloid.com/blogs"
        ogImage=""
        ogDescription="Latest Digital Analytics Contents"
      />
      <BlogPageBanner />
      <div className="blogs-container">
        {
          allArticles.length?allArticles.map((data, index) => (
            <BlogCardMain
              date={data.date}
              title={data.title}
              content={data.summary.substring(100)}
              to={'/blogs/'+data.permalink}
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
