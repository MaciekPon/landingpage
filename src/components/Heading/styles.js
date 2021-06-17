import styled from "styled-components";

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  height: 50rem;
  background: url(./images/background.jpg) no-repeat;
  background-size: cover;

`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  z-index: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    rgba(15, 15, 15, 1) 1%,
    rgba(255, 255, 255, 0) 47%
  );
`;

export const Content = styled.div`
  margin-left: 15rem;
  word-wrap: break-word;
  width: 45rem;
  color: #fff;
  font-size: 4rem;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-flow: wrap column;
  background-color: #fff;
  height: 30rem;
  width: 23rem;
  margin-top: 4rem;
  margin-right: 15rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  word-wrap: break-word;
  text-align: center;

  & p:nth-child(1) {
    line-height: 1rem;
    font-size: 2.5rem;
    color: rgb(70, 108, 170);
  }
`;

export const Input = styled.input`
  border: 3px solid grey;
  height: 3rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  background-color: rgb(241, 238, 238);
  color: #000;
  width: 20rem;
  padding-left: 1rem;

  &:focus {
    border: 4px solid rgb(70, 108, 170);
    outline: none;
  }
`;

export const StdBtn = styled.button`
  position: absolute;
  height: 4rem;
  background-color: rgb(70, 108, 170);
  color: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
  text-align: center;
  top: 25.5rem;
  right: 7.5rem;
`;
