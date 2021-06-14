import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <NavBar />
      <Heading />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
