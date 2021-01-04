import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import "./Navigation.css";
import logo from "../../assets/logo-color.svg";
import ham from "../../assets/ham.png";
import close from "../../assets/close.png";
import { Link, NavLink } from "react-router-dom";
import ContactUs from "../contactUs/ContactUs";

import { fetchAllServices } from "../../redux/actions/actions";
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

  let dispatch = useDispatch();

  const { allServices } = useSelector(
    ({ nexloid }) => ({
      allServices: nexloid.allServices,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchAllServices());
  }, [dispatch]);

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
          {/* <NavLink
            activeClassName="link-active"
            className="nav-links"
            to="/service"
            onClick={clickHam}
          >
            Service
          </NavLink> */}
          <div className="dropdown">
            <button className="dropbtn">
              Services
              <i
                className="fa fa-angle-down"
                aria-hidden="true"
                style={{ marginLeft: "4px" }}
              ></i>
            </button>
            <div className="dropdown-content">
              {allServices?.length
                ? allServices?.map((link, index) => (
                    <Link
                      className="nav-links"
                      to={"/service/" + link.permalink}
                      onClick={clickHam}
                    >
                      {link.title}
                    </Link>
                  ))
                : null}
            </div>
          </div>
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
              <Link className="nav-links" to="/tools/Nex-A" onClick={clickHam}>
                Nex-A
              </Link>
              <Link className="nav-links" onClick={clickHam}>
                Organic
              </Link>
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
