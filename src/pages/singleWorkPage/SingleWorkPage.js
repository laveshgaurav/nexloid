import React, {useEffect} from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Helmet } from 'react-helmet';
import "./SingleWorkPage.css";
import BlogCardMain from "../../components/blogCardMain/BlogCardMain";
import Footer from "../../components/footer/Footer";

import { fetchWorkById, fetchRelatedArticles } from '../../redux/actions/actions';

function SingleWorkPage(props) {
  const dispatch = useDispatch();
  const path = props.match.params.id;

  let { openedWork, relatedArticles } = useSelector(({nexloid}) => ({
    openedWork: nexloid.openedWork,
    relatedArticles: nexloid.relatedArticles
  }), shallowEqual);

  useEffect(() => {
    dispatch(fetchWorkById(path));
    dispatch(fetchRelatedArticles(openedWork[0].tags, ''))
  }, [dispatch, path, openedWork]);
 
  return (
      <React.Fragment>
      {
        openedWork.length?openedWork.map((data, index) => (
        <div key={index}>
        <Helmet>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title>{data.seo.metaTitle}</title>
          <meta name="author" content={data.seo.metaAuthor} />
          <meta name="description" content={data.seo.metaDescription} />

          {/* twitter cards */}
          <meta name="twitter:title" content={data.seo.twitterTitle}/>
          <meta name="twitter:url" content={data.seo.twitterUrl}/>
          <meta name="twitter:description" content={data.seo.twitterDescription}/>
          <meta name="twitter:image" content={data.seo.twitterImage}/>
          <meta name="twitter:card" content="summary_large_image"/>
        </Helmet>
        
        <div className="blog-id-container" >
          
          <div className="date">
            <p>
              {data.date}
            </p>
            <p>
              by {data.author}
            </p>
          </div>
          
          <div className="content">
            <h1>{data.title}</h1>
            <img src={data.featuredImage} alt={data.permalink} />
            <div className="para" dangerouslySetInnerHTML={{__html: data.content}}>
            </div>
            <div className="tags">
              <p>Tags : </p>
              {
                data.tags?.length?data.tags.map((data, index) => (
                  <button>{data}</button>
                )):null
              }
            </div>
          </div>
        </div></div>)):'Loading Content...'
      }
      
      {
       relatedArticles.length?(
        <div className="related-blog-container">
        <h2>Related blogs</h2>
        <div className="blogs-container">
          {
            relatedArticles.length?relatedArticles.map((data, index) => (
              <BlogCardMain
                date={data.date}
                title={data.title}
                content={data.summary}
                to={`/blogs/${data.permalink}`}
              />
            )):'Loading Related Blogs...'
          }
        </div>
        {/* <button className="viewmore">View more blogs</button> */}
      </div>
       ):null
     } 
      <Footer />
    </React.Fragment>    
  );
}

export default SingleWorkPage;
