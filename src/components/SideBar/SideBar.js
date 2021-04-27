import React from "react";
import logo from "../../images/robert-houck-logo.svg";
import SideBarCSS from "../SideBar/SideBar.module.css";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  return (
    <div className={SideBarCSS.sideBar}>
      <NavLink style={{ textDecoration: "none" }} to="/">
        <div className={SideBarCSS.logoContainer}>
          <img className={SideBarCSS.logo} src={logo} alt="rob-logo" />
        </div>
      </NavLink>

      <div className="nav-wrap">
        <NavLink style={{ textDecoration: "none" }} to="/about">
          <div className={SideBarCSS.navItem}>
            <p>About</p>
          </div>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/skills">
          <div className={SideBarCSS.navItem}>
            <p>My Skills</p>
          </div>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/work">
          <div className={SideBarCSS.navItem}>
            <p>My Work</p>
          </div>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/contact">
          <div className={SideBarCSS.navItem}>
            <p>Contact</p>
          </div>
        </NavLink>
      </div>
      <div className={SideBarCSS.iconContainer}>
        <div className={SideBarCSS.iconWrap}>
          <a href="https://www.linkedin.com/in/robbhouck/">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className={SideBarCSS.icon}
              size="2x"
            />
          </a>
        </div>
        <div className={SideBarCSS.iconWrap}>
          <a href="https://github.com/rbhouck32">
            <FontAwesomeIcon
              icon={faGithub}
              className={SideBarCSS.icon}
              size="2x"
            />
          </a>
        </div>
        <div className={SideBarCSS.iconWrap}>
          <a href="https://www.instagram.com/cle.cooked/">
            <FontAwesomeIcon
              icon={faInstagram}
              className={SideBarCSS.icon}
              size="2x"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
