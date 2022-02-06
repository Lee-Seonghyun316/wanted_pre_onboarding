import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const Tag = () => {
  const [tags, setTags] = useState([
    { id: 1, tagText: "CodeStates" },
    { id: 2, tagText: "JJang" },
  ]);
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleTagRemove = useCallback((id) => {
    setTags((tags) => tags.filter((tag) => tag.id !== id));
  }, []);

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setTags((tags) => [...tags, { id: Date.now(), tagText: text }]);
      setText("");
    },
    [tags, text]
  );

  return (
    <Container title="Tag">
      <Wrap inputFocused={isFocused}>
        <TagList>
          {tags.map(({ id, tagText }) => (
            <TagElement key={id}>
              {tagText}
              <RemoveBtn onClick={() => handleTagRemove(id)}>+</RemoveBtn>
            </TagElement>
          ))}
        </TagList>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={handleChange}
            value={text}
            placeholder="Press enter to add tags"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </Form>
      </Wrap>
    </Container>
  );
};

export default Tag;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.colors.gray_4};
  border-radius: 5px;
  padding: 10px;
  border-color: ${({ inputFocused, theme }) =>
    inputFocused ? theme.colors.purple : theme.colors.gray_4};
  gap: 10px;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TagElement = styled.li`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 7px;
  padding: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
`;

const RemoveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  transform: rotate(45deg);
  margin-left: 10px;
  height: 17px;
  width: 17px;
`;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  font-weight: ${({ theme }) => theme.fontWeight.bold_500};
  color: ${({ theme }) => theme.colors.gray_4};
`;
