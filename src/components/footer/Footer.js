import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-white.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="section">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h6>Office Not Office, OMBR Layout, Banaswadi, Bengaluru, Karnataka 560043</h6>
          {/* <h6>+91 99643 43404</h6> */}
          <h6><a href="mailto:support@nexloid.com">support@nexloid.com</a></h6>
        </div>
        <div className="section">
          {/* <Link className="links" to="/service">
            SERVICES
          </Link> */}
          <Link className="links" to="/works">
            WORKS
          </Link>
          <Link className="links" to="/articles">
            ARTICLES
          </Link>

          <Link className="links" to="/career">
            CAREERS
          </Link>
          <Link className="links" to="/aboutUs">
            ABOUT US
          </Link>
        </div>
        <div className="section">
          <div className="info">
            <h5>Subscribe to our newsletter!</h5>
            <p>Get the latest update</p>
          </div>
          <form className="forms">
            <input type="email" placeholder="Type your e-mail" />
            <button>
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>
          </form>
        </div>
        
      </div>
      <div className="footer-text">
          Copyright 2020 <a href="https://nexloid.com">Nexloid</a> | All Rights Reserved
        </div>
    </React.Fragment>
  );
}

export default Footer;
