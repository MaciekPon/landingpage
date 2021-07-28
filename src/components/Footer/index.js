import { useState } from "react";
import { MainWrapper, NavLink, StdSpan, Paragraph } from "./styles";

const Footer = () => {
  const [date, setDate] = useState();

  const CheckYear = (yr) => {
    var today = new Date();
    return (yr = today.getFullYear(setDate));
  };

  return (
    <MainWrapper>
      <p>
        <StdSpan>
          <strong>Any questions?</strong>
        </StdSpan>
        <StdSpan>
          Contact us on{" "}
          <NavLink href="mailto:example@plant.com">contact@plant.com</NavLink>
        </StdSpan>
      </p>
      <Paragraph>“All about plants” {CheckYear(date)}</Paragraph>
    </MainWrapper>
  );
};

export default Footer;



