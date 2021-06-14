import { Navigation, Logo, List, ListItem } from "./styles";

const NavBar = () => {
  return (
    <Navigation>
      <Logo>
        <img src="images/logo.svg" alt="logo" />
      </Logo>
      <List>
        <ListItem>OPINIONS</ListItem>
        <ListItem>CONTENT</ListItem>
        <ListItem>FAQ</ListItem>
      </List>
    </Navigation>
  );
};

export default NavBar;
