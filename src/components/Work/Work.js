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
            <div className={WorkCSS.imgContainer}>
              <a href={project.deployedURL} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.altText} />
              </a>
            </div>
            <div className={WorkCSS.wrap}>
              <h3>{project.projectName}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
