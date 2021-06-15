import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import Content from "./components/Content";
import Opinions from "./containers/Opinions";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <NavBar />
      <Heading />
      <Content />
      <Opinions />
      <Faq />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
