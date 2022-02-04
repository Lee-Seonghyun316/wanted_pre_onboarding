import React, { useRef, useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const Tag = ({ tags, setTags }) => {
  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const inputKeyDown = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value) {
      setTags([...tags, value]);
      inputRef.current.value = null;
    } else if (e.key === "Backspace" && !value) {
      removeTag(tags.length - 1);
    }
  };
  const inputRef = useRef();
  const [inputFocused, setInputFocused] = useState(false);
  return (
    <Container title="Tag">
      <Wrap>
        <TagList inputFocused={inputFocused}>
          {tags.map((tag, i) => (
            <TagElement key={i}>
              {tag}
              <DeleteBtn onClick={(i) => removeTag(i)}>+</DeleteBtn>
            </TagElement>
          ))}
          <PlusTag>
            <Input
              type="text"
              onKeyDown={inputKeyDown}
              ref={inputRef}
              placeholder="Press enter to add tags"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
          </PlusTag>
        </TagList>
      </Wrap>
    </Container>
  );
};

export default Tag;

const Wrap = styled.div``;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
  border: 1px solid var(--bright-grey);
  border-radius: 5px;
  padding: 10px 10px 0 10px;
  border-color: ${(props) =>
    props.inputFocused ? "var(--first)" : "var(--bright-grey)"};
`;

const TagElement = styled.li`
  display: flex;
  align-items: center;
  background: var(--first);
  border-radius: 7px;
  padding: 5px;
  color: var(--white);
  margin-right: 10px;
  font-size: 13px;
  margin-bottom: 10px;
`;

const DeleteBtn = styled.button`
  background: var(--white);
  border-radius: 50%;
  transform: rotate(45deg);
  margin-left: 10px;
  height: 17px;
  width: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlusTag = styled.li`
  display: flex;
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-weight: var(--bold);
  color: var(--bright-grey);
`;
