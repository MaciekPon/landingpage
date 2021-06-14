import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
`;

export const Header = styled.div`
  font-size: 3rem;
  color: rgb(70, 108, 170);
  font-weight: 800;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const SunWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 25rem;
  word-wrap: break-word;
  font-size: 2rem;
  text-align: center;

  & img {
    width: 10rem;
    height: 10rem;
  }
`;

export const CloudWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 25rem;
  word-wrap: break-word;
  font-size: 2rem;
  text-align: center;

  & img {
    width: 10rem;
    height: 10rem;
  }
`;
