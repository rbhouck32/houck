import React, { useRef, useEffect } from "react";
import SkillsCSS from "../Skills/Skills.module.css";

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
    <div className={SkillsCSS.container}>
      <div className={SkillsCSS.headerWrap}>
        <h1 ref={(e) => (headerScroll = e)}>My Skills</h1>
      </div>
      <div className={SkillsCSS.skillsContainer}>
        <div ref={(e) => (skillsScroll1 = e)} className={SkillsCSS.skillWrap}>
          <FontAwesomeIcon
            icon={faHtml5}
            className={SkillsCSS.icon}
            size="6x"
          />
          <div className={SkillsCSS.skillLabel}>
            <p>HTML5</p>
          </div>
        </div>

        <div ref={(e) => (skillsScroll2 = e)} className={SkillsCSS.skillWrap}>
          <FontAwesomeIcon icon={faJs} className={SkillsCSS.icon} size="6x" />
          <div className={SkillsCSS.skillLabel}>
            <p>JavaScript</p>
          </div>
        </div>
        <div ref={(e) => (skillsScroll3 = e)} className={SkillsCSS.skillWrap}>
          <FontAwesomeIcon
            icon={faReact}
            className={SkillsCSS.icon}
            size="6x"
          />
          <div className={SkillsCSS.skillLabel}>
            <p>React</p>
          </div>
        </div>
        <div ref={(e) => (skillsScroll4 = e)} className={SkillsCSS.skillWrap}>
          <FontAwesomeIcon icon={faNode} className={SkillsCSS.icon} size="6x" />
          <div className={SkillsCSS.skillLabel}>
            <p>NodeJs</p>
          </div>
        </div>
        <div ref={(e) => (skillsScroll5 = e)} className={SkillsCSS.skillWrap}>
          <div className={SkillsCSS.iconWrap}>
            <FontAwesomeIcon
              icon={faLess}
              className={SkillsCSS.icon}
              size="6x"
            />
          </div>
          <div className={SkillsCSS.skillLabel}>
            <p>LESS</p>
          </div>
        </div>
        <div ref={(e) => (skillsScroll6 = e)} className={SkillsCSS.skillWrap}>
          <div className={SkillsCSS.iconWrap}>
            <FontAwesomeIcon
              icon={faPython}
              className={SkillsCSS.icon}
              size="6x"
            />
          </div>

          <div className={SkillsCSS.skillLabel}>
            <p>Python</p>
          </div>
        </div>
        <div ref={(e) => (skillsScroll7 = e)} className={SkillsCSS.skillWrap}>
          <FontAwesomeIcon
            icon={faDatabase}
            className={SkillsCSS.icon}
            size="6x"
          />
          <div className={SkillsCSS.skillLabel}>
            <p>RDBMS</p>
          </div>
        </div>
        <div ref={(e) => (skillsScroll8 = e)} className={SkillsCSS.skillWrap}>
          <FontAwesomeIcon
            icon={faCss3Alt}
            className={SkillsCSS.icon}
            size="6x"
          />
          <div className={SkillsCSS.skillLabel}>
            <p>CSS3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
