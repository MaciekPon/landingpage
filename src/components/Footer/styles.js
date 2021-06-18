import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 2rem;
  background-color: #000;
  height: 7rem;
  color: #fff;
  padding: 0 2rem;

  @media (max-width: 520px) {
    font-size: 1rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Paragraph = styled.p`
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 520px) {
    font-size: 1.2rem;
    margin-top: 1rem;
    line-height: 1rem;
  }
`;

export const StdSpan = styled.span`
  position: absolute;
  top: 0.7rem;
  left: 2rem;

  & strong {
    margin-top: 1rem;
    display: block;
  }

  &:nth-child(2) {
    position: absolute;
    top: 3.5rem;
    left: 2rem;

    @media (max-width: 520px) {
      font-size: 1rem;
      position: static;
    }
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 520px) {
    font-size: 1rem;
    position: static;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;

  & hover {
    color: rgb(70, 108, 170);
  }
`;
