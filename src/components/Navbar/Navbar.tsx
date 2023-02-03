import { NavbarImage, NavbarLogo, NavbarWrapper } from "./Navbar.style";

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarLogo href="/">
        <NavbarImage src="/images/logo.png" alt="meowsletter logo" />
        MEOWSLETTER
      </NavbarLogo>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </NavbarWrapper>
  );
}

export default Navbar;
