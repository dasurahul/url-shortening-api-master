import React, { useState, useRef } from "react";

import styled from "styled-components";

import desktop from "../bg-shorten-desktop.svg";
import mobile from "../bg-shorten-mobile.svg";

import axios from "axios";

import { CopyToClipboard } from "react-copy-to-clipboard";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const Container = styled.div`
  max-width: 1000px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  top: -40px;
`;

const FormContainer = styled.div`
  background-color: var(--dark-violet);
  background-image: url(${(props) => props.desktop});
  padding: 15px 30px;
  border-radius: 5px;
  @media (max-width: 800px) {
    background-image: url(${(props) => props.mobile});
  }
`;

const MyForm = styled.form`
  display: grid;
  gap: 15px;
  grid-template-columns: 10fr 2fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 500;
  border: 3px solid ${(props) => (props.error ? "var(--red)" : "transparent")};
  outline: ${(props) => props.error && "none"};
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

const ListGroup = styled.ul`
  list-style: none;
  margin: 15px 0;
`;

const ListGroupItem = styled.li`
  margin: 15px 0;
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

const Form = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);
  const data = useRef({});
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const close = () => {
    setErrorMessage("");
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (link.trim().length === 0) {
      setError(true);
      return;
    }
    setLoading(true);
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((response) => {
        data.current = response.data.result;
        setLinks((links) => {
          return [...links, data.current];
        });
        setLoading(false);
        setLink("");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        setLoading(false);
      });
  };
  return (
    <Container>
      <FormContainer desktop={desktop} mobile={mobile}>
        <MyForm onSubmit={submitHandler}>
          <Input
            type="text"
            placeholder="Shorten a link here..."
            onChange={(event) => {
              setError(false);
              setLink(event.target.value);
            }}
            value={link}
            error={error}
            onBlur={() => {
              setError(false);
            }}
          />
          <Button>{loading ? "Shortening..." : "Shorten It!"}</Button>
        </MyForm>
      </FormContainer>
      <ListGroup>
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
    </Container>
  );
};

export default Form;
