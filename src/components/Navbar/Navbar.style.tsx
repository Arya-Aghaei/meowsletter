import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavbarLogo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fe8e6e;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-shadow: 1px 2px 5px #000;
  text-decoration: none;
`;

export const NavbarImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 0.5rem;
`;
