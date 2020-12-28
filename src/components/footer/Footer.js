import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="section">
          <Link to="/" style={{ textAlign: "center" }}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="section">
          <h6>Address</h6>
          <h6>Contact</h6>
          <h6>mail.id@gmail.com</h6>
        </div>
        <div className="section">
          <Link className="links" to="/service">
            SERVICES
          </Link>
          <Link className="links" to="/works">
            WORKS
          </Link>
          <Link className="links" to="/blogs">
            BLOGS
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
      <p
        style={{
          textAlign: "center",
          backgroundColor: "#1A1E21",
          color: "#FFF",
          margin: 0,
          padding: "10px 0"
        }}
      >
        Copyright <a href="https://nexloid.com">Nexloid</a>
      </p>
    </React.Fragment>
  );
}

export default Footer;
