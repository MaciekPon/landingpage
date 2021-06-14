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

  & span {
    position: absolute;
    top: 0.7rem;
    right: 2rem;
  }

  & span:nth-child(2) {
    position: absolute;
    top: 3.5rem;
    right: 2rem;
  }

  & a {
    text-decoration: none;
    color: white;
  }

  & a:hover {
    color: rgb(70, 108, 170);
  }
`;
