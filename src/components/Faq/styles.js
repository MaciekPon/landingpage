import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: rgb(70, 108, 170);
  height: 35rem;
  display: flex;
  padding: 2rem 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;

  & p {
    font-size: 4rem;
    color: #fff;
    line-height: 1rem;

    @media (max-width: 520px) {
      font-size: 3rem;
    }
  }

  @media (max-width: 520px) {
    width: 100%;
    height: 20%;
    margin-top: 0;
  }
`;

export const Questions = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 70%;
  margin-bottom: 2rem;
`;

export const StdBtn = styled.button`
  display: flex;
  align-items: center;
  height: 2rem;
  border-radius: 1rem;
  font-weight: 800;
  padding: 2rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: rgb(70, 108, 170);
    transform: scale(1.1);
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
`;
