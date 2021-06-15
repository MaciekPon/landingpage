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

export const Title = styled.div`
  color: rgb(70, 108, 170);
  font-weight: 800;
`;

export const PersonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PersonInfo = styled.div`
  display: flex;
  width: 40%;
  height: auto;
  background-color: rgb(240, 240, 240);
  text-align: left;
  align-items: center;
  padding: 3rem;
  justify-content: space-between;
`;

export const PersonImage = styled.div`
  border: 3px solid black;
  height: 15rem;
  width: 15rem;
  font-size: 3rem;
  margin-left: 2rem;
  text-align: center;
`;

export const PersonOpionion = styled.div`
  width: 50%;
  word-wrap: break-word;
  font-size: 2rem;
  height: 15rem;
  margin: 0 3rem;
  text-align: center;
  display: flex;
  align-items: center;
`;

export const PersonCardWrapper = styled.div`
  display: flex;
  height: 20rem;
  align-items: center;
  border: 1px solid black;
`;

export const LeftArrow = styled(AiOutlineArrowLeft)`
  width: 8rem;
  height: 8rem;
  color: rgb(70, 108, 170);
`;

export const RightArrow = styled(AiOutlineArrowRight)`
  width: 8rem;
  height: 8rem;
  color: rgb(70, 108, 170);
`;
