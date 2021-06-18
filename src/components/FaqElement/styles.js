import styled, { css } from "styled-components";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const MainWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  border-top: 1px solid black;
  padding: 1rem;
  font-size: 2rem;

  @media (max-width: 520px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: rgb(0, 0, 139);

  @media (max-width: 520px) {
    border: 1px solid rgb(70, 108, 170);
    font-size: 1rem;
  }
`;

export const StdBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: pink;
  }
`;

const baseChangesButtons = css`
  width: 2rem;
  height: 2rem;
`;

export const Plus = styled(AiOutlinePlus)`
  ${baseChangesButtons}
`;

export const Minus = styled(AiOutlineMinus)`
  ${baseChangesButtons}
`;
