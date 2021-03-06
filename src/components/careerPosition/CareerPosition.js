import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./CareerPosition.css";
function CareerPosition(props) {
  const [open, setOpen] = useState(false);
  const openAccordion = () => {
    setOpen(!open);
  };

  return (
    <div className="position-container">
      <button className="accordion" onClick={openAccordion}>
        {props.title}
        {open ? (
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        )}
      </button>
      <CSSTransition in={open} timeout={300} classNames="alert" unmountOnExit>
        <div className="careerContent">
          <p>{props.content}</p>
          <button onClick={props.open}>Apply</button>
        </div>
      </CSSTransition>
    </div>
  );
}

export default CareerPosition;
