import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const initialState = {
  name: "김코딩",
  age: 20,
};

const ClickToEdit = () => {
  const [inputs, setInputs] = useState(initialState);
  const [results, setResults] = useState({
    nameResult: inputs.name,
    ageResult: inputs.age,
  });
  const [isEditable, setIsEditable] = useState({
    nameEditable: false,
    ageEditable: false,
  });

  const handleChange = useCallback((e) => {
    console.log(e);
    const { value, name } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const handleBlur = () => {
    setResults({
      nameResult: inputs.name,
      ageResult: inputs.age,
    });
    setIsEditable({
      nameEditable: false,
      ageEditable: false,
    });
  };

  const handleDoubleClick = useCallback((e) => {
    const { id } = e.target;
    setIsEditable((isEditable) => ({ ...isEditable, [id]: true }));
  }, []);

  return (
    <Container title="ClickToEdit">
      <InputContainer>
        <label>
          이름
          {isEditable.nameEditable ? (
            <Input
              name="name"
              value={inputs.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <EditableTextArea
              id="nameEditable"
              onDoubleClick={handleDoubleClick}
            >
              {results.nameResult}
            </EditableTextArea>
          )}
        </label>
        <label>
          나이
          {isEditable.ageEditable ? (
            <Input
              name="age"
              value={inputs.age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <EditableTextArea
              id="ageEditable"
              onDoubleClick={handleDoubleClick}
            >
              {results.ageResult}
            </EditableTextArea>
          )}
        </label>
      </InputContainer>
      <Result>
        이름 {results.nameResult} 나이 {results.ageResult}
      </Result>
    </Container>
  );
};

export default ClickToEdit;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 145px;
  all: revert;
  padding: 5px;
  margin: 15px 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray_3};
`;

const EditableTextArea = styled.div`
  width: 157px;
  display: inline-block;
  padding: 5px;
  margin: 15px 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray_3};
`;

const Result = styled.div`
  margin: 15px 10px;
`;
