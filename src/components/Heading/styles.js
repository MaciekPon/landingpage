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

  @media (max-width: 520px) {
    width: 100%;
    height: 40rem;
    background-size: 150% 100%;
  }
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

  @media(max-width: 520px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    );
  }
`;

export const Content = styled.div`
  margin-left: 15rem;
  word-wrap: break-word;
  width: 45rem;
  color: #fff;
  font-size: 4rem;

  & span {
    display: inline-block;
    font-size: 4rem;

    @media (max-width: 520px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 520px) {
    margin-top: 2rem;
    font-size: 2rem;
    text-align: center;
    margin-left: 0;
    width: 100%;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-flow: wrap column;
  background-color: rgba(255, 255, 255, 0.8);
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

    @media (max-width: 520px) {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 520px) {
    width: 55%;
    margin-right: 0;
    height: 55%;
    margin-top: 1rem;
    font-size: 1rem;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(255, 255, 255, 0.7);
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

  &:last-child {
    background-color: rgb(70, 108, 170);
    color: #fff;
    padding: 1rem 2rem;
    text-align: center;
    cursor: pointer;
    border-radius: 1rem;
    height: 4rem;

    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 520px) {
      font-weight: 800;
      height: 3rem;
      width: 10rem;
      padding: 0 2rem;
      font-size: 0.6rem;
    }
  }

  @media (max-width: 520px) {
    font-size: 2rem;
    margin-bottom: 1rem;
    width: 9rem;
    height: 2.5rem;
    font-size: 0.8rem;
  }
`;