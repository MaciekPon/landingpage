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

  @media (max-width: 768px) {
    font-size: 2.3rem;
    margin: 0 1rem;
    text-align: center;
  }
  @media (max-width: 520px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 520px) {
    flex-direction: column;
  }
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

    @media (max-width: 768px) {
      width: 8rem;
      height: 8rem;
    }
    @media (max-width: 520px) {
      width: 7rem;
      height: 7rem;
    }
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    height: 18rem;
  }

  @media (max-width: 520px) {
    font-size: 1.5rem;
    height: 18rem;
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

    @media (max-width: 768px) {
      width: 8rem;
      height: 8rem;
    }
    @media (max-width: 520px) {
      width: 7rem;
      height: 7rem;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    height: 18rem;
    font-size: 1.5rem;
  }
  @media (max-width: 520px) {
    margin: 0;
    height: 18rem;
    font-size: 1.5rem;
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

    @media (max-width: 520px) {
      height: 18rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    font-size: rem;
    flex-direction: column;
  }
  @media (max-width: 520px) {
    display: flex;
    font-size: 1rem;
    flex-direction: column;
  }
`;

export const Paragraprh = styled.p`
  font-size: 4rem;
  color: #fff;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }
  @media (max-width: 520px) {
    font-size: 2rem;
    text-align: center;
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

  @media (max-width: 520px) {
    height: 18rem;
  }
`;

export const ToHeadingBtn = styled.button`
  border-radius: 1rem;
  padding: 1rem 2rem;
  height: 4rem;
  font-weight: 800;
  border: transparent;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    color: rgb(70, 108, 170);
    transform: scale(1.1);
  }
  @media (max-width: 520px) {
    position: absolute;
    top: 10rem;
    left: 2.5rem;
    width: 15rem;
    padding: 0 2rem;
    text-align: center;
    height: 3rem;
  }
`;

export const Span = styled.span`
  display: block;
`;
