import FaqElement from "../FaqElement";
import { MainWrapper, Questions, StdBtn } from "./styles";

import FaqData from "../../data/faqData.json";

const Faq = () => {
  return (
    <MainWrapper>
      <p>FAQ</p>
      <Questions>
        <FaqElement property={FaqData.first} />
        <FaqElement property={FaqData.second} />
        <FaqElement property={FaqData.third} />
      </Questions>
      <StdBtn>GET FREE E-BOOK</StdBtn>
    </MainWrapper>
  );
};

export default Faq;
