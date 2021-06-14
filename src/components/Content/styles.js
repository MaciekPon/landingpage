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
  justify-content: center;
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
  margin: 0 8rem;

  & img {
    width: 10rem;
    height: 10rem;
  }
`;

export const ImageAndTextWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;

  & img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 20rem;
    z-index: -1;
  }

  & p {
    font-size: 4rem;
    color: #fff;
    font-weight: 800;
  }

  & button {
    border-radius: 1rem;
    padding: 1rem 2rem;
    height: 4rem;
    font-weight: 800;
    border: transparent;
    margin-top: 0.5rem;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  background-color: rgba(70, 108, 170, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  left: 0;
  top: 0;
  flex-flow: column wrap;
  align-items: center;
`;
