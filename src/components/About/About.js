import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import AboutCSS from "../About/About.module.css";

const About = () => {
  let headerScroll = useRef(null);
  let paragraphScroll = useRef(null);
  let buttonScroll = useRef(null);

  useEffect(() => {
    TweenMax.staggerFrom(
      [headerScroll, paragraphScroll, buttonScroll],
      4,
      {
        opacity: 0,
        x: 40,
        ease: Power3.easeOut,
      },
      0.25
    );
  }, []);

  return (
    <div className={AboutCSS.container}>
      <h1 ref={(e) => (headerScroll = e)}>About</h1>
      <section className={AboutCSS.details}>
        <p ref={(e) => (paragraphScroll = e)}>
          I am a former culinarian of 12 years looking to make a career change.
          Recently graduated from Lambda School's Full Stack Web Development
          program. Interests include quality food and drink, music, art, coding,
          tinkering with my car,
          <br />
          and enjoying the great outdoors!
        </p>
        <a
          href="../../images/Robert_Houck_-_Web_Developer.pdf"
          title="Download Resume"
          download="Robert_Houck_-_Web_Developer"
        >
          <div ref={(e) => (buttonScroll = e)} className={AboutCSS.btn}>
            <p>My Resume</p>
          </div>
        </a>
      </section>
    </div>
  );
};

export default About;
