import { MainWrapper, ListOfQuestions, List, ListItem, StdBtn } from "./styles";

const Faq = () => {
  return (
    <MainWrapper>
      <p>FAQ</p>
      <ListOfQuestions>
        <List>
          <ListItem>
            Which beaches are available on my Base Tide Pro<span> +</span>
          </ListItem>
          <ListItem>
            How does tempreature impact my watch<span> +</span>
          </ListItem>
          <ListItem>
            How do i reset my digital tide watch<span> +</span>
          </ListItem>
        </List>
      </ListOfQuestions>
      <StdBtn>GET FREE E-BOOK</StdBtn>
    </MainWrapper>
  );
};

export default Faq;
