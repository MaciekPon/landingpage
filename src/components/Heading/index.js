import { useState } from "react";
import Modal from "react-modal";
import { BiWinkSmile } from "react-icons/bi";

import { MainWrapper, Wrapper, Content, Form, StdBtn, Input } from "./styles";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "20%",
    height: "20%",
    transform: "translate(-50%, -50%)",
  },
};

const Heading = () => {
  const [isOpened, setIsOpened] = useState(false, () => {console.log(isOpened)});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const openModal = () => {
    if (isValid()) {
      setIsOpened(true);
    }
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  const isValid = () => {
    if (name === '' || email === '') {
      return false;
    } else {
      return true;
    }
  };

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
          <Input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            placeholder="Your name"
            pattern="[A-Za-z]+"
            minLength="3"
            maxLength="10"
            required
          />
          <Input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            placeholder="Your e-mail address"
            pattern="+.com/.pl+(@)"
            required
          />
          <StdBtn onClick={openModal}>GET FREE E-BOOK</StdBtn>
          <Modal isOpen={isOpened} style={customStyles}>
            <div>
              Thank You for download our e-book! <BiWinkSmile />
            </div>
            <button onClick={closeModal}>X</button>
          </Modal>
        </Form>
      </Wrapper>
    </MainWrapper>
  );
};

export default Heading;
