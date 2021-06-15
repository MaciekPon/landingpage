import { useState } from "react";
import { MainWrapper } from "./styles";

const Footer = () => {
  var [date, setDate] = useState();

  const CheckYear = (yr) => {
    var today = new Date();
    return (yr = today.getFullYear(setDate));
  };

  return (
    <MainWrapper>
      <p>“All about plants” {CheckYear(date)}</p>
      <p>
        <span>
          <strong>Any questions?</strong>
        </span>
        <span>
          Contact us on <a href="mailto:example@plant.com">contact@plant.com</a>
        </span>
      </p>
    </MainWrapper>
  );
};

export default Footer;
