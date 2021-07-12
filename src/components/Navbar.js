import React, { useState } from "react";
import logo from "../logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";

import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
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

const Nav = styled.div`
  padding: 30px 20px;
  background-color: var(--dark-violet);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-radius: 8px;
`;

const MyNavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Logo>
          <img style={{ display: "block" }} src={logo} alt="logo" />
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
        {!open && (
          <IconContainer
            style={{ marginLeft: "auto" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconContainer>
        )}
        {open && (
          <IconContainer
            style={{ marginLeft: "auto" }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconContainer>
        )}
      </Container>
      <div style={{ maxWidth: "1000px", padding: "20px", margin: "0 auto" }}>
        <Collapse in={open}>
          <Nav>
            <MyNavLink href="#">Features</MyNavLink>
            <MyNavLink href="#">Pricing</MyNavLink>
            <MyNavLink href="#">Resources</MyNavLink>
            <div
              style={{
                height: "1px",
                backgroundColor: "var(--grayish-violet)",
              }}
            ></div>
            <MyNavLink href="#">Login</MyNavLink>
            <SignUp>Sign Up</SignUp>
          </Nav>
        </Collapse>
      </div>
    </>
  );
};

export default Navbar;
