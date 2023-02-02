import { NavbarImage, NavbarLogo, NavbarWrapper } from "./Navbar.style";

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarLogo href="/">
        <NavbarImage src="/images/logo.png" alt="meowsletter logo" />
        MEOWSLETTER
      </NavbarLogo>
    </NavbarWrapper>
  );
}

export default Navbar;
