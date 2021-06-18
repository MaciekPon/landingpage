import styled, { css } from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 40rem;
  font-size: 4rem;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
  @media (max-width: 520px) {
    width: 100%;
    font-size: 2.5rem;
    padding: 0;
  }
`;

export const PersonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }

  @media (max-width: 520px) {
    width: 100%;
    padding: 0;
  }
`;

export const PersonInfo = styled.div`
  display: flex;
  width: 100%;
  background-color: rgb(240, 240, 240);
  align-items: center;
  padding: 1rem 0;
  justify-content: space-between;

  & button {
    border: transparent;
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    padding: 0;
  }
`;

export const Title = styled.div`
  color: rgb(70, 108, 170);
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }
`;

const baseArrowStyles = css`
  width: 4rem;
  height: 4rem;
  color: rgb(70, 108, 170);

  @media (max-width: 768px) {
    width: 3.5rem;
  }
  @media (max-width: 520px) {
    width: 2.5rem;
  }
`;

export const LeftArrow = styled(AiOutlineArrowLeft)`
  ${baseArrowStyles}
`;

export const RightArrow = styled(AiOutlineArrowRight)`
  ${baseArrowStyles}
`;
