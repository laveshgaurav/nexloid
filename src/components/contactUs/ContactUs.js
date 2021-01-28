import React, {useState} from "react";
import ReactDom from "react-dom";
import logo from "../../assets/logo-color.svg";
import close from "../../assets/close.png";
import contactUs from "../../assets/contact-us.svg";
import { motion } from "framer-motion";
import "./ContactUs.css";
import ExternalService from '../../services/externalServices';

function ContactUs({ show, closeDrawer }) {
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [email, setEmail] = useState('');
  let [company, setCompany] = useState('');
  let [phone, setPhone] = useState('');
  let [service, setService] = useState('');
  let [leadSuccess, setLeadSuccess] = useState(false);

  const submitLead = async () => {
     let status = await ExternalService.createLead(firstName, lastName, company, email, phone, service);
     
     if(status) {
       setFirstName('');
       setLastName('');
       setEmail('');
       setCompany('');
       setPhone('');
       setService('');
       setLeadSuccess(true);
     } else {
       alert('Something Went Wrong');
       setLeadSuccess(false);
     }
  }

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
            {
                leadSuccess?(
                  <small className="text-success">
                    Submitted Succesfully!
                  </small>   
                ):''
              }
            <div>
              <div className="label name">
                {/* <label style={{ paddingLeft: "4px" }}>YOUR NAME</label> */}
                <input
                  type="text"
                  id="First_Name"
                  name="First_Name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(value)=>(setFirstName(value.target.value))}
                />
              </div>
              <div className="label name">
                <input
                  type="text"
                  id="Last_Name"
                  name="Last_Name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(value)=>(setLastName(value.target.value))}
                />
              </div>
              <div className="label name">
                {/* <label style={{ paddingLeft: "4px" }}>COMPANY NAME</label> */}
                <input
                  type="text"
                  id="Company"
                  name="Company"
                  placeholder="Company"
                  value={company}
                  onChange={(value)=>(setCompany(value.target.value))}
                />
              </div>
              <div className="label name">
                {/* <label style={{ paddingLeft: "4px" }}>EMAIL</label> */}
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(value)=>(setEmail(value.target.value))}
                />
              </div>
              <div className="label phone">
                {/* <label style={{ paddingLeft: "4px" }}>PHONE NUMBER</label> */}
                <input
                  type="text"
                  id="Mobile"
                  name="Mobile"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(value)=>(setPhone(value.target.value))}
                />
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

                <select name="services" id="services"
                onChange={(value)=>(setService(value.target.value))}>
                  <option style={{ fontWeight: "bold" }} defaultValue hidden>
                    SERVICE REQUIRED
                  </option>
                  <option value="Tag Management">Tag Management</option>
                  <option value="CRO">CRO</option>
                  <option value="Business Intelligence">Business Intelligence</option>
                </select>
              </div>
              <button
                style={{ display: "flex", alignItems: "center" }}
                onClick={()=>submitLead()}
              >
                Submit
                <i
                  className="fa fa-long-arrow-right"
                  aria-hidden="true"
                  style={{ marginLeft: "1rem" }}
                ></i>
              </button>
              
            </div>
          </div>
        </div>
      </motion.div>
      {/* </CSSTransition> */}

      <script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=e943ffd0a1e5525de1ce5f916a746a0c115d467898bf53fe74c9dd327ab0ca46gidf3319231164a3c033765f2263e508fb113712974cb81482dafbb12b4b12d1da2gid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513"
      />
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById("contact-us"));
}

export default ContactUs;
