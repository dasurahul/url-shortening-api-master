import React from "react";
import styled from "styled-components";
import facebook from "../icon-facebook.svg";
import twitter from "../icon-twitter.svg";
import pinterest from "../icon-pinterest.svg";
import instagram from "../icon-instagram.svg";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 20px;
  color: #fff;
  display: grid;
  grid-template-columns: 3fr 9fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`;

const LinksContainer = styled.div`
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Heading = styled.h4`
  margin-bottom: 30px;
  @media (max-width: 800px) {
    margin-top: 30px;
  }
`;

const Link = styled.div`
  margin-bottom: 15px;
  transition: color 300ms;
  color: var(--grayish-violet);
  &:hover {
    cursor: pointer;
    color: var(--cyan);
  }
`;

const IconsContainer = styled.div`
  @media (max-width: 800px) {
    margin-top: 30px;
  }
`;

const Icon = styled.img`
  cursor: pointer;
`;

const Footer = () => {
  return (
    <div style={{ backgroundColor: "var(--very-dark-violet)" }}>
      <Container>
        <h2 style={{ marginBottom: "30px" }}>Shortly</h2>
        <LinksContainer
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <Heading>Features</Heading>
            <Link>Link Shortening</Link>
            <Link>Branded Links</Link>
            <Link>Analytics</Link>
          </div>
          <div>
            <Heading>Resources</Heading>
            <Link>Blog</Link>
            <Link>Developers</Link>
            <Link>Support</Link>
          </div>
          <div>
            <Heading>Company</Heading>
            <Link>About</Link>
            <Link>Our Team</Link>
            <Link>Careers</Link>
          </div>
          <IconsContainer
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            <Icon src={facebook} alt="facebook" />
            <Icon src={twitter} alt="twitter" />
            <Icon src={pinterest} alt="pinterest" />
            <Icon src={instagram} alt="instagram" fill="green" />
          </IconsContainer>
        </LinksContainer>
      </Container>
    </div>
  );
};

export default Footer;
