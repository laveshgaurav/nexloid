import React from "react";
// import { Link } from "react-router-dom";
import "./clientSection.css";
import nilgiris from '../../assets/nilgiris.png';
import dentsu from '../../assets/dentsu-webchutneybig.png';
import subway from '../../assets/subway.png';
import ather from '../../assets/Ather-logo.png';

function ClientSection(props) {
  return (
    <div className="client-container">
      <div className="client-section">
        <h2>OUR CLIENTS</h2>
        <div className="clients">
          <div className="client-box">
            <div className="img-box">
              <img src={nilgiris} alt="nilgiris logo" />
            </div>
          </div>
          <div className="client-box">
            <div className="img-box">
              <img src={dentsu} alt="dentsu logo" />
            </div>
          </div>
          <div className="client-box">
            <div className="img-box">
              <img src={subway} alt="subway logo" />
            </div>
          </div>
          <div className="client-box">
            <div className="img-box">
              <img src={ather} alt="ather logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSection;