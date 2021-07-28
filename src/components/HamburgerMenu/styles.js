import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: none;

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    height: 90vh;
    width: 16rem;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

      ul {
        display: flex;
        flex-direction: column;
      }

      li {
        list-style: none;
      }
    
    a {
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: #000;
      text-decoration: none;
      transition: black 0.3s linear;

      @media (max-width: 520px) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: blue;
      }
    }
  }
`;
