import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: rgb(70, 108, 170);
  height: 35rem;
  display: flex;
  padding: 2rem 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & p {
    font-size: 4rem;
    color: #fff;
    line-height: 1rem;
  }
`;

export const ListOfQuestions = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  height: 60%;
  margin-bottom: 4rem;
`;

export const List = styled.ul`
  padding: 0;
  font-size: 2rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  padding: 1rem 2rem;
  height: 4rem;
  width: 90%;
  line-height: 2rem;
  list-style: none;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(3) {
    border-bottom: 1px solid black;
  }
`;
