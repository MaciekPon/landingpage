import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import Content from "./components/Content";


ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <NavBar />
      <Heading />
      <Content />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
