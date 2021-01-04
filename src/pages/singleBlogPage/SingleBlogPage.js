import React, {useEffect} from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PageHelmet from '../../components/pageHelmet';
import "./SingleBlogPage.css";
import BlogCardMain from "../../components/blogCardMain/BlogCardMain";
import Footer from "../../components/footer/Footer";

import { fetchArticleById } from '../../redux/actions/actions';

function SingleBlogPage(props) {
  const dispatch = useDispatch();
  const blogPath = props.match.params.id;

  let { openedArticle } = useSelector(({nexloid}) => ({
    openedArticle: nexloid.openedArticle
  }), shallowEqual);

  useEffect(() => {
    dispatch(fetchArticleById(blogPath));
  }, [dispatch, blogPath]);
 
  return (
      <React.Fragment>
      {
        openedArticle.length?openedArticle.map((data, index) => (
        <div key={index}>
        <PageHelmet
          title={data.seo.metaTitle}
          author={data.author}
          description={data.seo.metaDescription}
          twTitle={data.seo.twitterTitle}
          twUrl={data.seo.twitterUrl}
          twDescription={data.seo.twitterDescription}
          twImage={data.seo.twitterImage}
          ogTitle={data.seo.ogTitle}
          ogType={data.seo.ogType}
          ogUrl={data.seo.ogUrl}
          ogImage={data.seo.ogImage}
          ogDescription={data.seo.ogDescription}
          jsonLDSchema={data.jsonLDSchema}
        />
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
            <img src={data.images.headerImage} alt={data.permalink} />
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
        </div></div>)):null
      }
      
      <div className="related-blog-container">
        <h2>Related blogs</h2>
        <div className="blogs-container">
          <BlogCardMain
            date="10th Sep, 2020"
            title="Blog name"
            content="The text goes here, don't have the time to write a story, so bear with me. It'll be a longggggg paragraph so you all can sit back get some chips and beer and enjoy the movie this is something to look for so we all can have a good time around."
          />
          <BlogCardMain
            date="10th Sep, 2020"
            title="Blog name"
            content="The text goes here, don't have the time to write a story, so bear with me. It'll be a longggggg paragraph so you all can sit back get some chips and beer and enjoy the movie this is something to look for so we all can have a good time around."
          />
          <BlogCardMain
            date="10th Sep, 2020"
            title="Blog name"
            content="The text goes here, don't have the time to write a story, so bear with me. It'll be a longggggg paragraph so you all can sit back get some chips and beer and enjoy the movie this is something to look for so we all can have a good time around."
          />
        </div>
        <button className="viewmore">View more blogs</button>
      </div>
      <Footer />
    </React.Fragment>    
  );
}

export default SingleBlogPage;
