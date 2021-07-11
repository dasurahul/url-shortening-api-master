import React from "react";
import Navbar from "./components/Navbar";
import image from "./illustration-working.svg";
import desktop from "./bg-boost-desktop.svg";
import mobile from "./bg-boost-mobile.svg";
import Form from "./components/Form";
import Footer from "./components/Footer";

import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Hero = styled.div`
  @media (max-width: 1000px) {
    order: 1;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 60px;
  }
`;

const Heading = styled.h1`
  color: var(--very-dark-violet);
  font-size: 60px;
  line-height: 1.1;
  font-weight: 700;
  @media (max-width: 1000px) {
    font-size: 40px;
    margin-bottom: 8px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: 700;
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

const Image = styled.img`
  width: 50%;
  max-width: 500px;
  @media (max-width: 1000px) {
    width: 70%;
  }
`;

const SubHero = styled.div`
  background-image: url(${(props) => props.desktop});
  @media (max-width: 1000px) {
    background-image: url(${(props) => props.mobile});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero>
          <Heading>More than just shorter links</Heading>
          <p style={{ color: "var(--grayish-violet)", marginBottom: "40px" }}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Link href="#">Get Started</Link>
        </Hero>
        <Image src={image} alt="illustration-working" />
      </Container>
      <section style={{ backgroundColor: "#EFF1F7" }}>
        <Form />
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "var(--very-dark-violet)", marginBottom: "8px" }}>
            Advanced Statistics
          </h2>
          <p style={{ color: "var(--grayish-violet)" }}>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>
      <SubHero
        style={{
          textAlign: "center",
          padding: "40px 0",
          backgroundColor: "var(--dark-violet)",
        }}
        desktop={desktop}
        mobile={mobile}
      >
        <h2 style={{ marginBottom: "30px", color: "#fff" }}>
          Boost your links today
        </h2>
        <Link>Get Started</Link>
      </SubHero>
      <Footer />
    </div>
  );
};

export default App;
