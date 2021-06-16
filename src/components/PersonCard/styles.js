import styled from "styled-components";

export const PersonImage = styled.div`
  border: 3px solid #000;
  height: 19rem;
  width: 15rem;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const PersonOpionion = styled.div`
  width: 20rem;
  word-wrap: break-word;
  font-size: 1.5rem;
  height: 15rem;
  text-align: center;
  display: flex;
  align-items: center;
  margin-left: 6rem;
`;

export const PersonCardWrapper = styled.div`
  display: flex;
  width: 50rem;
  height: 20rem;
  align-items: center;
  border: 1px solid #000;
  margin: 0 1rem;
  padding: 2rem;
`;
