import styled from "styled-components";

export const PersonCardWrapper = styled.div`
  display: flex;
  width: 50rem;
  height: 20rem;
  align-items: center;
  border: 1px solid #000;
  margin: 0 1rem;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
  @media (max-width: 520px) {
    width: 45rem;
    padding: 1rem;
    flex-direction: column;
  }
`;

export const PersonImage = styled.div`
  border: 3px solid #000;
  height: 19rem;
  width: 15rem;

  & img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 520px) {
    width: 80%;
    height: 70%;
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

  @media (max-width: 768px) {
    font-size: 1.2rem;
    word-wrap: break-word;
    margin-left: 1rem;
    width: 50%;
  }
  @media (max-width: 520px) {
    font-size: 0.9rem;
    word-wrap: break-word;
    margin-left: 0;
    width: 100%;
  }
`;
