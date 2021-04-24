import React from "react";
import logo from "../../images/robert-houck-logo.svg";
import "../SideBar/SideBar.css";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  return (
    <div className="SideBar">
      <NavLink style={{ textDecoration: "none" }} to="/">
        <div className="logo-container">
          <img className="logo" src={logo} alt="rob-logo" />
        </div>
      </NavLink>

      <div className="nav-wrap">
        <NavLink style={{ textDecoration: "none" }} to="/about">
          <div className="nav-item">
            <p>About</p>
          </div>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/skills">
          <div className="nav-item">
            <p>My Skills</p>
          </div>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/work">
          <div className="nav-item">
            <p>My Work</p>
          </div>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/contact">
          <div className="nav-item">
            <p>Contact</p>
          </div>
        </NavLink>
      </div>
      <div className="icons">
        <div className="icon-wrap">
          <a href="https://www.linkedin.com/in/robbhouck/">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" size="2x" />
          </a>
        </div>
        <div className="icon-wrap">
          <a href="https://github.com/rbhouck32">
            <FontAwesomeIcon icon={faGithub} className="icon" size="2x" />
          </a>
        </div>
        <div className="icon-wrap">
          <a href="https://www.instagram.com/cle.cooked/">
            <FontAwesomeIcon icon={faInstagram} className="icon" size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
