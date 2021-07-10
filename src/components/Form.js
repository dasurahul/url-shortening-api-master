import React, { useState } from "react";

import styled from "styled-components";

import desktop from "../bg-shorten-desktop.svg";
import mobile from "../bg-shorten-mobile.svg";

const Container = styled.div`
  max-width: 1000px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
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

const Form = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    if (link.trim().length === 0) {
      setError(true);
      return;
    }
    console.log(link);
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
          />
          <Button>Shorten It!</Button>
        </MyForm>
      </FormContainer>
    </Container>
  );
};

export default Form;
