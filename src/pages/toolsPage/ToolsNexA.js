import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import ServicePageBanner from "../../components/servicePageBanner/ServicePageBanner";
import nexA from "../../assets/nexa.svg";
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
        para="Nex-A is a simple ticketing system tool with better UX.
        Nexa does everything needed with a signup, signup and most of the NDA(a non-disclosure agreement) is filled automatically while keeping your data under high security."
      />
      {openedService?.length
        ? openedService
            .slice(0, 1)
            .map((data, index) => <ServiceTool tools={data.tools} title={`Apps it supports`}/>)
        : null}

      <div className="tools-card-container">
        <h3>How it works?</h3>
        <div className="card-container">
          <ToolsCard step="1" method="Sign Up" text="Signup using your mail ids and sit back while the forum automatically fills up NDA for you!"/>
          <ToolsCard step="2" method="Shoot your queries" text="We're here to answer your queries ASAP"/>
          <ToolsCard step="3" method="Resolve and discuss" text="Whatever be the issue, you get a detailed report of each."/>
          <ToolsCard step="4" method="Repeat!" text="Satisfied? Come back again."/>
        </div>
      </div>
      
      <div className="tools-bottom-banner">
        <div>
          <h1>Liking us so far?</h1>
          <h2>Know us better.</h2>
        </div>
        <Link to="/works">
        <button>Know more</button>
        </Link>
        
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default ToolsNexA;
