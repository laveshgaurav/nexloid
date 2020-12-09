import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import ham from "../../assets/ham.png";
import close from "../../assets/close.png";
function Navigation() {
  const [toggle, setToggle] = useState(true);
  let drawerClasses = "navbar";

  if (toggle) {
    drawerClasses = "open";
  }

  const clickHam = () => {
    console.log(toggle);
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className="Nav-Container">
      <div className="Logo">
        {toggle ? (
          <img src={ham} className="ham" onClick={clickHam} alt="ham" />
        ) : (
          <img src={close} className="ham" onClick={clickHam} alt="close" />
        )}

        <img src={logo} alt="logo" className="logo_img" />
      </div>
      <div className={drawerClasses}>
        <a className="nav-links" href="#home">
          Service
        </a>
        <div className="dropdown">
          <button className="dropbtn">
            Tools
            <i
              className="fa fa-angle-down"
              aria-hidden="true"
              style={{ marginLeft: "4px" }}
            ></i>
          </button>
          <div className="dropdown-content">
            <a className="nav-links">Link 1</a>
            <a className="nav-links">Link 2</a>
            <a className="nav-links">Link 3</a>
          </div>
        </div>
        <a className="nav-links">Works</a>
        <a className="nav-links">Blogs</a>
        <a className="nav-links">Career</a>
        <a className="nav-links">About</a>
      </div>

      <div className="Button">
        <button>Contact us</button>
      </div>
    </div>
  );
}

export default Navigation;
