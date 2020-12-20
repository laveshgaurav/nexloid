import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import ham from "../../assets/ham.png";
import close from "../../assets/close.png";
import { Link, NavLink } from "react-router-dom";
import ContactUs from "../contactUs/ContactUs";
function Navigation() {
  const [toggle, setToggle] = useState(true);
  const [drawerOpen, SetDrawerOpen] = useState(false);
  const closeDrawer = () => {
    SetDrawerOpen(false);
  };
  const openDrawer = () => {
    SetDrawerOpen(true);
  };
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
    <React.Fragment>
      <div className="Nav-Container">
        <div className="Logo">
          {toggle ? (
            <img src={ham} className="ham" onClick={clickHam} alt="ham" />
          ) : (
            <img src={close} className="ham" onClick={clickHam} alt="close" />
          )}

          <Link to="">
            <img src={logo} alt="logo" className="logo_img" />
          </Link>
        </div>
        <div className={drawerClasses}>
          <NavLink
            activeClassName="link-active"
            className="nav-links"
            to="/service"
            onClick={clickHam}
          >
            Service
          </NavLink>
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
              <Link className="nav-links">Testing & CRO</Link>
              <Link className="nav-links">Business Intelligence</Link>
              <Link className="nav-links">Digital Development</Link>
              <Link className="nav-links">Data Collection</Link>
            </div>
          </div>
          <NavLink
            activeClassName="link-active"
            className="nav-links"
            to="/works"
            onClick={clickHam}
          >
            Works
          </NavLink>
          <NavLink
            activeClassName="link-active"
            className="nav-links"
            to="/blogs"
            onClick={clickHam}
          >
            Blogs
          </NavLink>
          <NavLink
            activeClassName="link-active"
            className="nav-links"
            to="/career"
            onClick={clickHam}
          >
            Career
          </NavLink>
          <NavLink
            activeClassName="link-active"
            className="nav-links"
            to="/aboutUs"
            onClick={clickHam}
          >
            About
          </NavLink>
        </div>

        <div className="Button">
          <button onClick={openDrawer}>Contact us</button>
        </div>
      </div>
      {drawerOpen ? (
        <ContactUs show={drawerOpen} closeDrawer={closeDrawer} />
      ) : null}
    </React.Fragment>
  );
}

export default Navigation;
