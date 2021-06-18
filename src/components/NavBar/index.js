import { useState } from "react";
import Hamburger from "../Hamburger";
import HamburgerMenu from "../HamburgerMenu";

import { Navigation, Logo, List, ListItem, NavLink } from "./styles";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Navigation>
      <Logo>
        <img src="images/logo.svg" alt="logo" />
      </Logo>

      <List>
        <NavLink href="#opinions">
          <ListItem>OPINIONS</ListItem>
        </NavLink>
        <NavLink href="#content">
          <ListItem>CONTENT</ListItem>
        </NavLink>
        <NavLink href="#faq">
          <ListItem>FAQ</ListItem>
        </NavLink>
      </List>

      <Hamburger open={open} setOpen={setOpen} />
      <HamburgerMenu open={open} setOpen={setOpen} />
    </Navigation>
  );
};

export default NavBar;
