import styled from "styled-components";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const MainWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  border-top: 1px solid black;
  padding: 1rem;
  font-size: 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: rgb(0, 0, 139);
`;

export const StdBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: pink;
}
`;

export const Plus = styled(AiOutlinePlus)`
  width: 2rem;
  height: 2rem;
`;

export const Minus = styled(AiOutlineMinus)`
  width: 2rem;
  height: 2rem;
`;