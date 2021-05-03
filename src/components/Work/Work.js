import React, { useRef, useEffect } from "react";
import WorkCSS from "../Work/Work.module.css";
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
  return (
    <div className={WorkCSS.container}>
      <h1 ref={(e) => (headerScroll = e)}>My Work</h1>
    </div>
  );
};

export default Work;
