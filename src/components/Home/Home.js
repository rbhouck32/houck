import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import portrait from "../../images/portrait.webp";
import "../Home/Home.css";

const Home = () => {
  let textHeader = useRef(null);
  let textSubHeader = useRef(null);
  let circleScroll = useRef(null);
  let circleGray = useRef(null);
  let circleGreen = useRef(null);
  let circleBlack = useRef(null);
  let contactButton = useRef(null);
  let scrollPortrait = useRef(null);

  useEffect(() => {
    TweenMax.to(textHeader, 6, {
      opacity: 1,
      y: 175,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    TweenMax.to(textSubHeader, 6, {
      opacity: 1,
      y: 175,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    TweenMax.to(contactButton, 6, {
      opacity: 1,
      y: 175,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    TweenMax.to(circleScroll, 6, {
      opacity: 1,
      y: 175,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    TweenMax.from(circleGray, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
    });
    TweenMax.from(circleGreen, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    TweenMax.from(circleBlack, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.4,
    });
  }, []);

  return (
    <div className="container home">
      <div className="content-left">
        <h1
          ref={(e) => {
            textHeader = e;
          }}
        >
          Hello,
          <br />
          I'm Rob,
          <br />
          web developer
        </h1>
        <div className="sub-header">
          <p
            ref={(e) => {
              textSubHeader = e;
            }}
          >
            Full-Stack Web Developer / For Hire
          </p>
        </div>
        <div
          ref={(e) => {
            circleScroll = e;
          }}
          className="circle-container"
        >
          <div
            className="circle gray"
            ref={(e) => {
              circleGray = e;
            }}
          ></div>
          <div
            className="circle green"
            ref={(e) => {
              circleGreen = e;
            }}
          ></div>
          <div
            className="circle black"
            ref={(e) => {
              circleBlack = e;
            }}
          ></div>
        </div>
        <div
          ref={(e) => {
            contactButton = e;
          }}
          className="contact-button"
        >
          <NavLink style={{ textDecoration: "none" }} to="/contact">
            <p>Contact me!</p>
          </NavLink>
        </div>
      </div>

      <div className="content-right">
        <img
          src={portrait}
          alt="self-portrait"
          ref={(e) => {
            scrollPortrait = e;
          }}
        />
      </div>
    </div>
  );
};

export default Home;
