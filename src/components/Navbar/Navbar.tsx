import { NavbarImage, NavbarLogo, NavbarWrapper } from "./Navbar.style";

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarLogo href="/">
        <NavbarImage src="/images/logo.webp" alt="meowsletter logo" />
        MEOWSLETTER
      </NavbarLogo>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </NavbarWrapper>
  );
}

export default Navbar;
