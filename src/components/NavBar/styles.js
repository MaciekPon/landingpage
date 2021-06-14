import styled from "styled-components";

export const Navigation = styled.div`
  position: absolute;
  width: 100%;
  height: 4rem;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  left: 0;
  top: 0;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3rem;
  color: #fff;
  margin-left: 3rem;

  & img {
    width: 4rem;
    height: 4rem;
  }
`;

export const List = styled.ul`
  display: flex;
  margin-right: 7rem;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-left: 2rem;
  background-color: transparent;
  color: #fff;
  border: transparent;
  cursor: pointer;
  font-size: 1.5rem;
`;