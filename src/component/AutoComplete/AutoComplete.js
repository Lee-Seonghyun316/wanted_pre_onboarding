import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Input from "./Input";
import Suggestions from "./Suggestions";

const autoItems = [
  { id: 1, text: "antique" },
  { id: 2, text: "vintage" },
  { id: 3, text: "중고A급" },
  { id: 4, text: "rustic" },
  { id: 5, text: "refurbished" },
];

const AutoComplete = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputText, setInputText] = useState("");

  const changeSuggestions = useCallback(
      (value) => {
        const regex = new RegExp(`${value}`, "i");
        setSuggestions(autoItems.filter(({ text }) => regex.test(text)));
      },
      []
  );

  const handleTextChange = useCallback((e) => {
    const value = e.target.value;
    if (value.length > 0) {
      changeSuggestions(value);
    } else {
      setSuggestions([]);
    }
    setInputText(value);
  }, [changeSuggestions]);

  const handleSelect = useCallback((value) => {
    setInputText(value);
    changeSuggestions(value);
  }, [changeSuggestions]);

  const handleXBtnClick = useCallback(() => {
    setInputText("");
    setSuggestions([]);
  }, []);

  return (
      <Container title="AutoComplete">
        <Wrap>
          <Input
              isSuggestions={suggestions.length}
              value={inputText}
              onChange={handleTextChange}
              onClickXBtn={handleXBtnClick}
          />
          {suggestions.length === 0 ? null : (
              <Suggestions suggestions={suggestions} handleClick={handleSelect} />
          )}
        </Wrap>
      </Container>
  );
};

export default AutoComplete;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
`;
