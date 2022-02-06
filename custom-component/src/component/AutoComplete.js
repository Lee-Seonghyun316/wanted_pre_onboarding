import React, { useCallback, useState } from "react";
import Container from "./Container";
import styled from "styled-components";

const autoItems = [
  { id: 1, text: "antique" },
  { id: 2, text: "vintage" },
  { id: 3, text: "중고A급" },
  { id: 4, text: "rustic" },
  { id: 5, text: "refurbished" },
];
const { id, text } = [autoItems];

const AutoComplete = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputText, setInputText] = useState("");

  const changeSuggestions = useCallback(
    (value) => {
      const regex = new RegExp(`${value}`, "i");
      setSuggestions(autoItems.filter(({ text }) => regex.test(text)));
    },
    [autoItems, text]
  );

  const handleTextChange = useCallback((e) => {
    const value = e.target.value;
    if (value.length > 0) {
      changeSuggestions(value);
    } else {
      setSuggestions([]);
    }
    setInputText(value);
  }, []);

  const handleSelect = useCallback((value) => {
    setInputText(value);
    changeSuggestions(value);
  }, []);

  const handleXBtnClick = useCallback(() => {
    setInputText("");
    setSuggestions([]);
  }, []);

  const renderSuggestions = useCallback(() => {
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <AutoContainer>
        <AutoList>
          {suggestions.map(({ id, text }) => (
            <AutoItem key={id} onClick={() => handleSelect(text)}>
              {text}
            </AutoItem>
          ))}
        </AutoList>
      </AutoContainer>
    );
  }, [suggestions, id, text]);

  return (
    <Container title="AutoComplete">
      <Wrap>
        <InputContainer isSuggestions={suggestions.length}>
          <Input type="text" value={inputText} onChange={handleTextChange} />
          <XBtn onClick={() => handleXBtnClick()}>+</XBtn>
        </InputContainer>
        {renderSuggestions()}
      </Wrap>
    </Container>
  );
};

export default AutoComplete;

const Wrap = styled.div`
  position: relative;
  width: 100%;
`;

const InputContainer = styled.div`
  height: 35px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray_4};
  box-shadow: 0 6px 7px 1px ${({ theme }) => theme.colors.gray_4};
  padding: 5px 5px 5px 10px;
  border-radius: ${({ isSuggestions }) =>
    isSuggestions > 0 ? "15px 15px 0 0" : "15px 15px 15px 15px"};
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
  top: 35px;
  left: 0;
  transform: translateY(-50%+35px);
  background-color: white;
  padding: 10px 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray_4};
  border-top: none;
  box-shadow: 0 6px 7px 1px ${({ theme }) => theme.colors.gray_4};
  gap: 10px;
  border-radius: 0 0 15px 15px;
`;

const AutoList = styled.ul`
  gap: 3px;
  display: flex;
  flex-direction: column;
`;

const AutoItem = styled.li`
  padding: 0 10px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.bold_600};
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_4};
  }
`;
