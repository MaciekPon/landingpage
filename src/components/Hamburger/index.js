import { bool, func } from 'prop-types';
import { StyledBurger } from './styles';
const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Hamburger;