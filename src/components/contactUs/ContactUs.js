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
            <form action='https://crm.zoho.com/crm/WebToLeadForm' type='POST' onsubmit='javascript:document.charset="UTF-8";'
            name='WebToLeads4337895000000393013' >
            <input type='text' style={{display:'none'}} name='xnQsjsdp'
      value='f3319231164a3c033765f2263e508fb113712974cb81482dafbb12b4b12d1da2' />
            <input type='hidden' name='zc_gad' id='zc_gad' value='' />
            <input type='text' style={{display:'none'}} name='xmIwtLD'
              value='e943ffd0a1e5525de1ce5f916a746a0c115d467898bf53fe74c9dd327ab0ca46' />
            <input type='text' style={{display:'none'}} name='actionType' value='TGVhZHM=' />
            <input type='text' style={{display:'none'}} name='returnURL' value='http://localhost:3000'/>
            <input type='text' style={{display:'none'}} id='ldeskuid' name='ldeskuid' />
            <input type='text' style={{display:'none'}} id='LDTuvid' name='LDTuvid' />

            <div className="label name">
                {/* <label style={{ paddingLeft: "4px" }}>YOUR NAME</label> */}
                <input type="text" id='Last_Name' name='Last Name' placeholder="Name"/>
              </div>
              <div className="label name">
                {/* <label style={{ paddingLeft: "4px" }}>COMPANY NAME</label> */}
                <input type="text" id='Company' name='Company' placeholder="Company"/>
              </div>
              <div className="label name">
                {/* <label style={{ paddingLeft: "4px" }}>EMAIL</label> */}
                <input type="email" id='Email' name='Email' placeholder="Email"/>
              </div>
              <div className="label phone">
                {/* <label style={{ paddingLeft: "4px" }}>PHONE NUMBER</label> */}
                <input type="text" id='Mobile' name='Mobile' placeholder="Phone Number"/>
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
                  <option style={{ fontWeight: "bold" }} defaultValue hidden>
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
                  className="fa fa-long-arrow-right"
                  aria-hidden="true"
                  style={{ marginLeft: "1rem" }}
                ></i>
              </button>
            </form>
            {/* <div className="info">
              <p>email us at:</p>
              <h4>mail.id@nexloid.com</h4>
            </div> */}
          </div>
        </div>
      </motion.div>
      {/* </CSSTransition> */}
      
      <script id='wf_anal'
      src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=e943ffd0a1e5525de1ce5f916a746a0c115d467898bf53fe74c9dd327ab0ca46gidf3319231164a3c033765f2263e508fb113712974cb81482dafbb12b4b12d1da2gid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513' />
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById("contact-us"));
}

export default ContactUs;
