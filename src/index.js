import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <NavBar />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
