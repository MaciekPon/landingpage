import { useState } from "react";

import {
  MainWrapper,
  Wrapper,
  Content,
  Form,
  Input,
  SubmitInput,
  Title,
} from "./styles";

const Heading = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitClick = () => {
    if ({ formValidation }) {
      alert("Thank You for downloading our e-book!");
    } else {
      return false;
    }
  };

  const formValidation = () => {
    if (!/^[a-zA-Z]*$/g.test(name)) {
      return false;
    }

    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)$/.test(email)
    ) {
      return false;
    }
  };
  return (
    <MainWrapper id="heading">
      <Wrapper>
        <Content>
          <p>
            All you need to know about plants.
            <span>
              <strong>Get your free e-book!</strong>
            </span>
          </p>
        </Content>
        <Form onSubmit={submitClick}>
          <Title>
            Download <span>e-book</span>
          </Title>
          <p>Fill in your details to get free ebook <span>“All about plants”:</span></p>
          <Input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            placeholder="Your name"
            minLength="3"
            maxLength="10"
            required
          />
          <Input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            placeholder="Your e-mail address"
            required
          />
          <SubmitInput type="submit" value="GET FREE E-BOOK" />
        </Form>
      </Wrapper>
    </MainWrapper>
  );
};

export default Heading;
