import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
function Footer() {
  return (
    <div className="footer-container">
      <div className="section">
        <img src={logo} />
      </div>
      <div className="section">
        <h6>Address</h6>
        <h6>Contact</h6>
        <h6>mail.id@gmail.com</h6>
      </div>
      <div className="section">
        <a className="links">BLOGS</a>
        <a className="links">SERVICES</a>
        <a className="links">TOOLS</a>
        <a className="links">CAREERS</a>
        <a className="links">ABOUT US</a>
      </div>
      <div className="section">
        <div className="info">
          <h5>Subscribe to our newsletter!</h5>
          <p>Get the latest update</p>
        </div>
        <form className="forms">
          <input type="email" placeholder="Type your e-mail" />
          <button>
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
