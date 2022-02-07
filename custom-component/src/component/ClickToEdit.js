import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const initialState = {
  name: "김코딩",
  age: 20,
};

const ClickToEdit = () => {
  const [inputs, setInputs] = useState(initialState);
  const { name, age } = inputs;

  const [results, setResults] = useState({
    nameResult: name,
    ageResult: age,
  });
  const { nameResult, ageResult } = results;

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const handleBlur = useCallback(() => {
    setResults({
      nameResult: name,
      ageResult: age,
    });
  }, [name, age]);

  return (
    <Container>
      <Form>
        <Label>
          이름
          <Input
            name="name"
            value={name}
            onChange={onChange}
            onBlur={handleBlur}
          />
        </Label>
        <Label>
          나이
          <Input
            name="age"
            value={age}
            onChange={onChange}
            onBlur={handleBlur}
          />
        </Label>
      </Form>
      <Result>
        이름 {nameResult} 나이 {ageResult}
      </Result>
    </Container>
  );
};

export default ClickToEdit;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input`
  all: revert;
  padding: 5px;
  margin: 15px 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray_3};
`;

const Result = styled.div`
  margin: 15px 10px;
`;
