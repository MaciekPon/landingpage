import { useState } from "react";

import { Plus, Minus, MainWrapper, ContentWrapper, Content, ToHeadingBtn } from "./styles";

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
      <ToHeadingBtn onClick={toggle}>{isOpened ? <Minus /> : <Plus />}</ToHeadingBtn>
    </MainWrapper>
  );
};

export default FaqElement;
