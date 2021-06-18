import FaqElement from "../FaqElement";
import { MainWrapper, Questions, StdBtn, NavLink } from "./styles";

import FaqData from "../../data/faqData.json";

const Faq = () => {
  return (
    <MainWrapper id="faq">
      <p>FAQ</p>
      <Questions>
        <FaqElement property={FaqData.first} />
        <FaqElement property={FaqData.second} />
        <FaqElement property={FaqData.third} />
      </Questions>
      <NavLink href="#heading"><StdBtn>GET FREE E-BOOK</StdBtn></NavLink>
    </MainWrapper>
  );
};

export default Faq;
