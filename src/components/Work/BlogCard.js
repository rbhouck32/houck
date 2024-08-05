import React, { useRef, useEffect } from "react";

import blogs from "./blogs.js";


const BlogCard = () => {

    
    
    
    
    return (
          <>
            {blogs.map((blog) => (

              <div key={blog.id} className={WorkCSS.card}>
                <div></div>
                <div>
                  <h3>{blog.blog_title}</h3>
                  <p>{blog.description}</p>
                </div>
              </div>
  ))}
);
        
        </>
       
};

export default BlogCard;
