import React, { useRef, useEffect } from "react";

import { Route } from "react-router-dom";
import { TweenMax } from "gsap";

import Home from "./components/Home/Home.js";
import Skills from "./components/Skills/Skills.js";
import Contact from "./components/Contact/Contact.js";
import SideBar from "./components/SideBar/SideBar.js";

import "./App.css";

function App() {
  let app = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
  });
  return (
    <div
      ref={(e) => {
        app = e;
      }}
      className="App"
    >
      <SideBar />

      <Route exact path="/" component={Home} />

      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
