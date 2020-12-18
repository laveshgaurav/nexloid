import React from "react";
import ReactDom from "react-dom";
import logo from "../../assets/logo.png";
import close from "../../assets/close.png";
import contactUs from "../../assets/contact-us.png";
import { motion } from "framer-motion";
import "./ContactUs.css";
function ContactUs({ show, closeDrawer }) {
  const content = (
    <div className="aboutUs-container">
      {/* <button onClick={props.closeDrawer}>Close</button> */}
      {/* <CSSTransition
        in={show}
        timeout={400}
        classNames="alert"
        mountOnEnter
        unmountOnExit
        transitionAppear={true}
      > */}
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="aboutUs"
      >
        <div className="top">
          <img src={logo} alt="logo" />
          <button onClick={closeDrawer}>
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="bottom">
          <div className="image-box">
            <h3>We'd love to hear</h3>
            <h3>from you.</h3>
            <img src={contactUs} alt="contact" />
          </div>
          <div className="form">
            <h3>Contact us</h3>
            <form>
              <div className="label name">
                <label style={{ paddingLeft: "4px" }}>COMPANY NAME</label>
                <input type="text" />
              </div>
              <div className="label phone">
                <label style={{ paddingLeft: "4px" }}>PHONE NUMBER</label>
                <input type="number" />
              </div>
              <div className="label service">
                {/* <label for="cars">
                    Service Required
                    <i
                      className="fa fa-angle-down"
                      aria-hidden="true"
                      style={{ marginLeft: "1rem" }}
                    ></i>
                  </label> */}

                <select name="cars" id="cars">
                  <option style={{ fontWeight: "bold" }} selected hidden>
                    SERVICE REQUIRED
                  </option>
                  <option>Tag Management</option>
                  <option>Cro</option>
                  <option>Power</option>
                  <option>Digital Development</option>
                </select>
              </div>
              <button
                type="submit"
                style={{ display: "flex", alignItems: "center" }}
              >
                Submit
                <i
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                  style={{ marginLeft: "1rem" }}
                ></i>
              </button>
            </form>
            <div className="info">
              <p>email us at:</p>
              <h4>mail.id@nexloid.com</h4>
            </div>
          </div>
        </div>
      </motion.div>
      {/* </CSSTransition> */}
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById("contact-us"));
}

export default ContactUs;
