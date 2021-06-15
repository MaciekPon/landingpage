import styled from "styled-components";

export const PersonImage = styled.div`
  border: 3px solid black;
  height: 15rem;
  width: 15rem;
  margin-left: 2rem;
  
  & img {
      width: 100%;
      height: 100%;
  }
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
  margin: 0 1rem;
`;
