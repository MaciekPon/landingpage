import { useState } from "react";

import { Plus, Minus, StdBtn, MainWrapper, ContentWrapper, Content } from "./styles";

const FaqElement = ({ property }) => {
  const { title, content } = property;
  const [isOpened, setisOpened] = useState(false);

  const toggle = () => {
    setisOpened(!isOpened);
  };

  return (
    <MainWrapper>
      <ContentWrapper>
        <div>{title}</div>
        {isOpened && <Content>{content}</Content>}
      </ContentWrapper>
      <StdBtn onClick={toggle}>{isOpened ? <Minus /> : <Plus />}</StdBtn>
    </MainWrapper>
  );
};

export default FaqElement;
