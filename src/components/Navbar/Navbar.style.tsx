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
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  ul {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 700;
        text-shadow: 1px 2px 5px #000;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: #fe8e6e;
        }
      }
    }
  }
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
  flex: 3;
`;

export const NavbarImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 0.5rem;
`;
