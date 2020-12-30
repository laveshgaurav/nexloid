import React, { useEffect } from "react";
import ServicePageBanner from "../../components/servicePageBanner/ServicePageBanner";
import nexA from "../../assets/nexA.svg";
import ServiceTool from "../../components/serviceTool/ServiceTool";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchServiceDetails } from "../../redux/actions/actions";
import "./ToolsPage.css";
import ToolsCard from "../../components/toolsCard/ToolsCard";
import Footer from "../../components/footer/Footer";
function ToolsNexA(props) {
  const slug = props.match.params.serviceID;

  const { openedService } = useSelector(
    ({ nexloid }) => ({
      openedService: nexloid.openedService,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServiceDetails(slug));
  }, [dispatch, slug]);

  return (
    <React.Fragment>
      <ServicePageBanner
        image={nexA}
        head1="Nex-A"
        para="We modify several different variables for your website and
 test for the version that brings the most valuable traffic and
 ensures higher chances of conversion in the least possible time.
We modify several different variables for your website and
 test for the version that brings the most valuable traffic and
 ensures higher chances of conversion in the least possible time"
      />
      {openedService?.length
        ? openedService
            .slice(0, 1)
            .map((data, index) => <ServiceTool tools={data.tools} />)
        : null}

      <div className="tools-card-container">
        <h3 className="h3">Steps for understanding</h3>
        <div className="card-container">
          <ToolsCard step="01" method="Sign In" />
          <ToolsCard step="02" method="Ask question" />
          <ToolsCard step="03" method="Resolve and answer" />
          <ToolsCard step="04" method="Let's repeat" />
        </div>
      </div>
      {openedService?.length
        ? openedService
            .slice(1, 3)
            .map((data, index) => <ServiceTool tools={data.tools} />)
        : null}
      <div className="button-container">
        <button>Other Tool</button>
      </div>
      <div className="tools-bottom-banner">
        <div>
          <h1>Liking us so far?</h1>
          <h2>Know us better.</h2>
        </div>
        <button>Know more</button>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default ToolsNexA;
