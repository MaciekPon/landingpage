import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import Content from "./components/Content";
import Opinions from "./components/Opinions";
import Faq from "./components/Faq";

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <NavBar />
      <Heading />
      <Content />
      <Opinions />
      <Faq />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
