import React from "react";
import logo from "../logo.svg";

import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Logo = styled.div``;

const NavLink = styled.a``;

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <div>
        <NavLink href="#">Features</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">Resources</NavLink>
      </div>
    </Container>
  );
};

export default Navbar;
