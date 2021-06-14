import {
  Header,
  MainWrapper,
  ContentWrapper,
  SunWrapper,
  CloudWrapper,
} from "./styles";

const Content = () => {
  return (
    <MainWrapper>
      <Header>
        <h2>See what is included in our e-book</h2>
      </Header>
      <ContentWrapper>
        <SunWrapper>
          <img src="/images/sun.svg" alt="sun" />
          <p>
            <strong>Lorem ipsum</strong>
            <br />
            Lorem ipsum lorem imsum lorem imsum{" "}
          </p>
        </SunWrapper>
        <CloudWrapper>
          <img src="images/cloud.svg" alt="cloud" />
          <p>
            <strong>Lorem ipsum</strong>
            <br />
            Lorem ipsum lorem imsum lorem imsum
          </p>
        </CloudWrapper>
        <SunWrapper>
          <img src="/images/sun.svg" alt="sun" />
          <p>
            <strong>Lorem ipsum</strong>
            <br />
            Lorem ipsum lorem imsum lorem imsum{" "}
          </p>
        </SunWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Content;
