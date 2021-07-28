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
export default HamburgerMenu;
