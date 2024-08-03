import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import AboutCSS from "../About/About.module.css";
import resume from "../../resume/Rob_Houck_-_Web_Developer_Resume.pdf";

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
      <div className="wrap">
        <h1 ref={(e) => (headerScroll = e)}>About</h1>
      </div>
      <section className={AboutCSS.details}>
        <p ref={(e) => (paragraphScroll = e)}>
          Experienced Software Developer with a passion for Front End Web
          Development. Knowledgeable in user interface, testing, and debugging
          processes. Equipped with a diverse and promising skill set. Proficient
          in an assortment of technologies, including JavaScript, J query HTML,
          CSS, Django, and React with a deep understanding of WCAG compliance
          and web accessibility. Experienced in Learning Management systems
          integration using platforms like Canvas, Desire 2 Learn, and
          Blackboard.
        </p>

        <a
          href={resume}
          title="Download Resume"
          download="Robert_Houck_-_Web_Developer_Resume"
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
