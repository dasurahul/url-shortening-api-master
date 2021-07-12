import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import image from "./illustration-working.svg";
import desktop from "./bg-boost-desktop.svg";
import mobile from "./bg-boost-mobile.svg";
import Form from "./components/Form";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
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
    margin-bottom: 80px;
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

const ListGroup = styled.ul`
  list-style: none;
`;

const ListGroupItem = styled.li`
  margin-bottom: 15px;
  padding: 15px 30px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  p {
    margin-left: auto;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    p {
      margin: 0;
    }
    button {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  font-weight: 700;
  color: #fff;
  background-color: var(--cyan);
  padding: 12px 26px;
  border-color: var(--cyan);
  border-radius: 5px;
  border: 1px solid transparent;
  &:hover {
    background-color: var(--light-cyan);
    border-color: var(--light-cyan);
    color: #fff;
  }
  transition: all 300ms;
`;

const SubHero = styled.div`
  background-image: url(${(props) => props.desktop});
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1000px) {
    background-image: url(${(props) => props.mobile});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [open, setOpen] = useState(false);
  const data = useRef({});
  const [links, setLinks] = useState([]);
  const submitHandler = (link) => {
    setLoading(true);
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((response) => {
        data.current = response.data.result;
        setLinks((links) => {
          return [...links, data.current];
        });
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage("Something went wrong");
        setLoading(false);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const close = () => {
    setErrorMessage("");
  };
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
        <Form onSubmit={submitHandler} loading={loading} />
        <ListGroup style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {links.map((link) => {
            return (
              <ListGroupItem key={link.full_short_link}>
                <div>{link.original_link}</div>
                <p style={{ color: "var(--cyan)" }}>{link.full_short_link}</p>
                <CopyToClipboard
                  text={link.full_short_link}
                  onCopy={() => setOpen(true)}
                >
                  <Button>Copy</Button>
                </CopyToClipboard>
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              color: "var(--very-dark-violet)",
              marginTop: "60px",
              marginBottom: "8px",
            }}
          >
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
          padding: "80px 0",
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
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Copied to clipboard
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorMessage ? true : false}
        autoHideDuration={3000}
        onClose={close}
      >
        <Alert onClose={close} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default App;
