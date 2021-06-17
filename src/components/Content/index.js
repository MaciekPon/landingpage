import {
  Header,
  MainWrapper,
  ContentWrapper,
  SunWrapper,
  CloudWrapper,
  ImageAndTextWrapper,
  Wrapper
} from "./styles";

const Content = () => {
  return (
    <>
      <MainWrapper id="content">
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

      <ImageAndTextWrapper>
        <Wrapper>
          <img src="/images/unnamed.jpg" alt="plants" />
          <p>Do you want to get to know plants?</p>
          <button>GET FREE E-BOOK</button>
        </Wrapper>
      </ImageAndTextWrapper>
    </>
  );
};

export default Content;
