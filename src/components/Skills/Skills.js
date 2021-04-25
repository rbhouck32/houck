import React, { useRef, useEffect } from "react";
import "../Skills/Skills.css";

import { TweenMax, Power3 } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faReact,
  faNode,
  faLess,
  faPython,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  let headerScroll = useRef(null);
  let skillsScroll1 = useRef(null);
  let skillsScroll2 = useRef(null);
  let skillsScroll3 = useRef(null);
  let skillsScroll4 = useRef(null);
  let skillsScroll5 = useRef(null);
  let skillsScroll6 = useRef(null);
  let skillsScroll7 = useRef(null);
  let skillsScroll8 = useRef(null);

  //   const [isShown, setIsShown] = useState(false);

  //   const onEnterHandler = () => {
  //     setIsShown(true);
  //   };
  //   const onLeaveHandler = () => {
  //     setIsShown(false);
  //   };

  useEffect(() => {
    TweenMax.staggerFrom(
      [
        headerScroll,
        skillsScroll1,
        skillsScroll2,
        skillsScroll3,
        skillsScroll4,
        skillsScroll5,
        skillsScroll6,
        skillsScroll7,
        skillsScroll8,
      ],
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
    <div className="container skills">
      <div className="header-wrap">
        <h1 ref={(e) => (headerScroll = e)}>My Skills</h1>
      </div>
      <div className="skills-container">
        <div ref={(e) => (skillsScroll1 = e)} className="skill-wrap first">
          <FontAwesomeIcon icon={faHtml5} className="icon" size="6x" />
          <div className="skill-label">
            <p>HTML5</p>
          </div>
        </div>

        <div ref={(e) => (skillsScroll2 = e)} className="skill-wrap">
          <FontAwesomeIcon icon={faJs} className="icon" size="6x" />
          <div className="skill-label">
            <p>JavaScript</p>
          </div>
        </div>
        <div ref={(e) => (skillsScroll3 = e)} className="skill-wrap">
          <FontAwesomeIcon icon={faReact} className="icon" size="6x" />
          <div className="skill-label react">
            <p>React</p>
          </div>
        </div>
        <div ref={(e) => (skillsScroll4 = e)} className="skill-wrap">
          <FontAwesomeIcon icon={faNode} className="icon" size="6x" />
          <div className="skill-label node">
            <p>NodeJs</p>
          </div>
        </div>
        <div ref={(e) => (skillsScroll5 = e)} className="skill-wrap">
          <div className="icon-wrap">
            <FontAwesomeIcon icon={faLess} className="icon" size="6x" />
          </div>
          <div className="skill-label less">
            <p>LESS</p>
          </div>
        </div>
        <div ref={(e) => (skillsScroll6 = e)} className="skill-wrap">
          <div className="icon-wrap python">
            <FontAwesomeIcon icon={faPython} className="icon" size="6x" />
          </div>

          <div className="skill-label">
            <p>Python</p>
          </div>
        </div>
        <div ref={(e) => (skillsScroll7 = e)} className="skill-wrap">
          <FontAwesomeIcon icon={faDatabase} className="icon" size="6x" />
          <div className="skill-label">
            <p>RDBMS</p>
          </div>
        </div>
        <div ref={(e) => (skillsScroll8 = e)} className="skill-wrap">
          <FontAwesomeIcon icon={faCss3Alt} className="icon" size="6x" />
          <div className="skill-label">
            <p>CSS3</p>
          </div>
        </div>
      </div>
      {/* <section className="lower-content">
        <div className="skills-list">
          <ul className="left-list">
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>NodeJS</li>
          </ul>
          <ul className="right-list">
            <li>LESS</li>
            <li>Python</li>
            <li>RDBMS</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className="right-lower">
          <h2></h2>
        </div>
      </section> */}
    </div>
  );
};

export default Skills;
