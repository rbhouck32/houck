import React, { useRef, useEffect } from "react";
import WorkCSS from "../Work/Work.module.css";
import projects from "./projects.js";

import { TweenMax, Power3 } from "gsap";

const Work = () => {
  let headerScroll = useRef(null);

  useEffect(() => {
    TweenMax.staggerFrom(
      [headerScroll],
      4,
      {
        opacity: 0,
        x: 40,
        ease: Power3.easeOut,
      },
      0.25
    );
  }, []);
  console.log(projects);
  return (
    <div className={WorkCSS.container}>
      <h1 ref={(e) => (headerScroll = e)}>My Work</h1>
      <div className={WorkCSS.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={WorkCSS.card}>
            <a href={project.deployedURL}>
              <img src={project.image} alt={project.altText} />
            </a>
            <h3>{project.projectName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
