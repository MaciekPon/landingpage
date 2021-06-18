import {
  Header,
  MainWrapper,
  ContentWrapper,
  SunWrapper,
  CloudWrapper,
  ImageAndTextWrapper,
  Wrapper,
  ToHeadingBtn,
  Span,
  Paragraprh
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
              <Span><strong>Lorem ipsum</strong></Span>
              Lorem ipsum lorem imsum lorem imsum{" "}
            </p>
          </SunWrapper>
          <CloudWrapper>
            <img src="images/cloud.svg" alt="cloud" />
            <p>
            <Span><strong>Lorem ipsum</strong></Span>
              Lorem ipsum lorem imsum lorem imsum
            </p>
          </CloudWrapper>
          <SunWrapper>
            <img src="/images/sun.svg" alt="sun" />
            <p>
            <Span><strong>Lorem ipsum</strong></Span>
              Lorem ipsum lorem imsum lorem imsum{" "}
            </p>
          </SunWrapper>
        </ContentWrapper>
      </MainWrapper>

      <ImageAndTextWrapper>
        <Wrapper>
          <img src="/images/unnamed.jpg" alt="plants" />
          <Paragraprh>Do you want to get to know plants?</Paragraprh>
          <a href="#heading"><ToHeadingBtn>GET FREE E-BOOK</ToHeadingBtn></a>
        </Wrapper>
      </ImageAndTextWrapper>
    </>
  );
};

export default Content;
