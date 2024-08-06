import React, { useEffect, useRef, useState } from "react";
import BlogCSS from "../Blogs/Blog.module.css";
import { TweenMax, Power3 } from "gsap";

const Blog = () => {
  //gsap variables
  let headerScroll = useRef(null);

  useEffect(() => {
    TweenMax.staggerFrom(
      [headerScroll],
      4,
      {
        opacity: 0,
        x: 60,
        ease: Power3.easeOut,
      },
      0.25
    );
  }, []);

  return (
    <section className={BlogCSS.container}>
      <div className="flex-container">
        <div className={BlogCSS.headerWrap}>
          <h1 ref={(e) => (headerScroll = e)}>Blog</h1>
        </div>
        <div className={BlogCSS.pageBreak}></div>
      </div>
    </section>
  );
};

export default Blog;
