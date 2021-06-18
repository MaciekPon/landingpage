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

    @media (max-width: 768px) {
      width: 3rem;
      height: 3rem;
    }
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
  }
  @media (max-width: 520px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const List = styled.ul`
  display: flex;
  margin-right: 7rem;
  list-style: none;

  @media (max-width: 768px) {
    margin-right: 3rem;
  @media (max-width: 520px) {
    display: none;
  }
  @media (max-width: 520px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  margin-left: 2rem;
  background-color: transparent;
  color: #fff;
  border: transparent;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    color: rgb(70, 108, 170);
  }
    
   @media (max-width: 520px) {
    display: none;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  
  }
  @media (max-width: 520px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
`;
