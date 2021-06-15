import styled from "styled-components";
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
`;

export const PersonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PersonInfo = styled.div`
  display: flex;
  width: 85%;
  height: auto;
  background-color: rgb(240, 240, 240);
  text-align: left;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;

  & button {
    border: transparent;
    width:8rem;
    height: 8rem;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  color: rgb(70, 108, 170);
  font-weight: 800;
`;

export const LeftArrow = styled(AiOutlineArrowLeft)`
  width: 4rem;
  height: 4rem;
  color: rgb(70, 108, 170);
`;

export const RightArrow = styled(AiOutlineArrowRight)`
  width: 4rem;
  height: 4rem;
  color: rgb(70, 108, 170);
`;
