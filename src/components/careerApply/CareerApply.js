import React from "react";
import ReactDom from "react-dom";
import logo from "../../assets/logo-color.svg";
import close from "../../assets/close.png";
import { motion } from "framer-motion";
import "./CareerApply.css";

function CareerApply({ close }) {
  const content = (
    <div className="CareerForm-container">
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="CareerForm-container"
      >
        <div className="box">
          <h3>Tell us about you!</h3>
          <div className="forms">
            <input className="text-input" type="text" placeholder="Name" />
            <textarea
              rows="4"
              cols="80"
              className="text-input"
              type="text"
              placeholder="Why you want to join us?"
            />
            <label className="file" for="files">
              <i
                style={{ margin: "0 4px" }}
                class="fa fa-plus"
                aria-hidden="true"
              ></i>
              Add your resume here
            </label>
            <input
              style={{ color: "white", visibility: "hidden" }}
              id="files"
              name="files"
              type="file"
              placeholder="Add your resume"
            />
          </div>
          <div className="btn-container">
            <button className="submit-btn">SUBMIT</button>
            <button onClick={close}>CLOSE</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById("career"));
}

export default CareerApply;
