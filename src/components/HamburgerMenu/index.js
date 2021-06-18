import { bool } from "prop-types";
import { StyledMenu } from "./styles";
const HamburgerMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <a href="#opinions">
          <li>OPINIONS</li>
        </a>
        <a href="#content">
          <li>CONTENT</li>
        </a>
        <a href="#faq">
          <li>FAQ</li>
        </a>
      </ul>
    </StyledMenu>
  );
};
HamburgerMenu.propTypes = {
  open: bool.isRequired,
};
export default HamburgerMenu;
