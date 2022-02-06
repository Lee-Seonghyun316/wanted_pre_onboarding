import React, { useState } from "react";
import Container from "./Container";
import styled from "styled-components";

const AutoComplete = () => {
  const autoItems = [
    { id: 1, text: "antique" },
    { id: 2, text: "vintage" },
    { id: 3, text: "중고A급" },
    { id: 4, text: "rustic" },
    { id: 5, text: "refurbished" },
  ];
  const [suggestions, setSuggestions] = useState([]);
  const [inputText, setInputText] = useState("");

  const onTextChanged = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      setSuggestions(autoItems.sort().filter((item) => regex.test(item.text)));
    } else {
      setSuggestions([]);
    }
    setInputText(value);
  };
  const suggestionSelect = (value) => {
    setInputText(value);
    setSuggestions([]);
  };
  const handleXBtn = () => {
    setInputText("");
    setSuggestions([]);
  };
  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <AutoDropPart>
        <AutoList>
          {suggestions.map((item) => (
            <AutoItem key={item.id} onClick={() => suggestionSelect(item.text)}>
              {item.text}
            </AutoItem>
          ))}
        </AutoList>
      </AutoDropPart>
    );
  };

  return (
    <Container title="AutoComplete">
      <InputContainer isSuggestions={suggestions.length}>
        <Input type="text" value={inputText} onChange={onTextChanged} />
        <XBtn onClick={() => handleXBtn()}>+</XBtn>
      </InputContainer>
      <AutoContainer isSuggestions={suggestions.length}>
        {renderSuggestions()}
      </AutoContainer>
    </Container>
  );
};

export default AutoComplete;

const InputContainer = styled.div`
  height: 35px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-100%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray_4};
  box-shadow: 0px 6px 7px 1px ${({ theme }) => theme.colors.gray_4};
  padding: 5px 5px 5px 10px;
  border-radius: 15px 15px
    ${({ isSuggestions }) => (isSuggestions > 0 ? 0 : "15px")}
    ${({ isSuggestions }) => (isSuggestions > 0 ? 0 : "15px")};
`;

const Input = styled.input`
  font-weight: ${({ theme }) => theme.fontWeight.bold_600};
  width: 90%;
`;

const XBtn = styled.button`
  transform: rotate(45deg);
  cursor: pointer;
  font-size: 18px;
`;

const AutoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%+35px);
  visibility: ${({ isSuggestions }) =>
    isSuggestions > 0 ? "visible" : "hidden"};
  background-color: white;
  padding: 10px 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray_4};
  border-top: none;
  box-shadow: 0px 6px 7px 1px ${({ theme }) => theme.colors.gray_4};
  gap: 10px;
  border-radius: 0 0 15px 15px;
`;

const AutoDropPart = styled.div``;

const AutoList = styled.ul`
  gap: 3px;
  display: flex;
  flex-direction: column;
`;

const AutoItem = styled.li`
  padding: 0 10px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.bold_600};
  :hover {
    background-color: ${({ theme }) => theme.colors.gray_4};
  }
`;
