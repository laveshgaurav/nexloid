import React,{useEffect} from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ServicePageBanner from "../../components/servicePageBanner/ServicePageBanner";
import ServiceTool from "../../components/serviceTool/ServiceTool";
import "./ServicePage.css";
import img from "../../assets/8401.jpg";
import Footer from "../../components/footer/Footer";
// import cro from "../../assets/cro-service.svg";
import { fetchServiceDetails } from '../../redux/actions/actions';

function ServicePage(props) {
  const slug = props.match.params.serviceID;

  const { openedService } = useSelector(({nexloid}) => ({
    openedService: nexloid.openedService
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServiceDetails(slug))
  }, [dispatch, slug]);

  return (
    <React.Fragment>
      {
        openedService?.length?openedService.map((data, index) => (
          <div key={index}>
            <ServicePageBanner image={data.headerImage} head1={data.title} para={data.introText} />
            <ServiceTool tools={data.tools}/>
            <div className="servicePage-containers">
              <div className="service-box">
                <div className="content">
                  <h3>Tag Management and Data Collection</h3>
                  <p>
                    We modify several different variables for your website and test
                    for the version that brings the most valuable traffic and ensures
                    higher chances of conversion in the least possible time.
                  </p>
                </div>
                <div className="img-box">
                  <img src={img} alt="img" />
                </div>
              </div>
            </div>
          </div>
        )):null
      }

      {/* <div className="button-container">
        <button>
          Other Services
          <i
            className="fa fa-angle-right"
            aria-hidden="true"
            style={{ marginLeft: "1rem" }}
          ></i>
        </button>
      </div> */}
      <Footer />
    </React.Fragment>
  );
}

export default ServicePage;
