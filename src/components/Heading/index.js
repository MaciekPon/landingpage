import { MainWrapper, Wrapper, Content, Form } from "./styles";

const Heading = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <Content>
          <p>
            All you need to know about plants.
            <strong>Get your free e-book!</strong>
          </p>
        </Content>
        <Form>
          <p>
            <strong>Download e-book</strong>
          </p>
          <p>Fill in your details to get free ebook “All about plants”:</p>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your e-mail address" />
          <button>GET FREE E-BOOK</button>
        </Form>
      </Wrapper>
    </MainWrapper>
  );
};

export default Heading;
