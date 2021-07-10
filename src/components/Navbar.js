import React from "react";
import logo from "../logo.svg";
import MenuIcon from "@material-ui/icons/Menu";

import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    padding: 20px;
  }
`;

const Logo = styled.div``;

const NavLinksContainer = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: var(--grayish-violet);
  &:hover {
    color: var(--dark-violet);
  }
  transition: color 300ms;
`;

const SignUp = styled(NavLink)`
  color: #fff;
  background-color: var(--cyan);
  padding: 12px 26px;
  border-radius: 25px;
  &:hover {
    background-color: var(--light-cyan);
    color: #fff;
  }
  transition: background-color 300ms;
`;

const IconContainer = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <NavLinksContainer style={{ marginLeft: "35px", marginRight: "35px" }}>
        <NavLink href="#" style={{ marginLeft: "15px", marginRight: "15px" }}>
          Features
        </NavLink>
        <NavLink href="#" style={{ marginLeft: "15px", marginRight: "15px" }}>
          Pricing
        </NavLink>
        <NavLink href="#" style={{ marginLeft: "15px", marginRight: "15px" }}>
          Resources
        </NavLink>
      </NavLinksContainer>
      <NavLinksContainer style={{ marginLeft: "auto" }}>
        <NavLink href="#">Login</NavLink>
        <SignUp href="#" style={{ marginLeft: "30px" }}>
          Sign Up
        </SignUp>
      </NavLinksContainer>
      <IconContainer style={{ marginLeft: "auto" }}>
        <MenuIcon />
      </IconContainer>
    </Container>
  );
};

export default Navbar;
