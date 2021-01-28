import React,{useEffect} from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ServicePageBanner from "../../components/servicePageBanner/ServicePageBanner";
import ServiceTool from "../../components/serviceTool/ServiceTool";
import "./ServicePage.css";
import img from "../../assets/8401.jpg";
import Footer from "../../components/footer/Footer";
import BlogCardMain from "../../components/blogCardMain/BlogCardMain";
// import cro from "../../assets/cro-service.svg";
import { fetchServiceDetails } from '../../redux/actions/actions';
import LoadingContent from '../../components/loadingContent';

function ServicePage(props) {
  const slug = props.match.params.serviceID;

  const { openedService, relatedWorks } = useSelector(({nexloid}) => ({
    openedService: nexloid.openedService,
    relatedWorks: nexloid.relatedWorks
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServiceDetails(slug));
  }, [dispatch, slug]);

  return (
    <React.Fragment>
      {
        openedService&&openedService?.length?openedService.map((data, index) => (
          <div key={index+Math.random()}>
            <ServicePageBanner image={data.headerImage} head1={data.title} para={data.introText} />
            <ServiceTool tools={data.tools}/>
            {
              relatedWorks&&relatedWorks.length?(
                <div className="related-blog-container">
                <h2>Related Works</h2>
                <div className="blogs-container">
                  {
                    relatedWorks.length?relatedWorks.map((data, index) => (
                      <BlogCardMain
                        date={data.date}
                        title={data.title}
                        content={data.summary}
                        to={`/works/${data.permalink}`}
                      />
                    )):'Loading Related Articles...'
                  }
                </div>
                
              </div>
              ):null
            }
          </div>
        )):<LoadingContent loaderText="Loading service..."/>
      }
      
      
      <Footer />
    </React.Fragment>
  );
}

export default ServicePage;
