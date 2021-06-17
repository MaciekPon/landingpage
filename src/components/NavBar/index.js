import { Navigation, Logo, List, ListItem, NavLink } from "./styles";

const NavBar = () => {
  return (
    <Navigation>
      <Logo>
        <img src="images/logo.svg" alt="logo" />
      </Logo>
      <List>
        <NavLink href="#opinions"><ListItem>OPINIONS</ListItem></NavLink>
        <NavLink href="#content"><ListItem>CONTENT</ListItem></NavLink>
        <NavLink href="#faq"><ListItem>FAQ</ListItem></NavLink>
      </List>
    </Navigation>
  );
};

export default NavBar;
