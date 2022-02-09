import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Suggestions = ({ suggestions, handleClick }) => {
    return (
        <AutoContainer>
            <AutoList>
                {suggestions.map(({ id, text }) => (
                    <AutoItem key={id} onClick={() => handleClick(text)}>
                        {text}
                    </AutoItem>
                ))}
            </AutoList>
        </AutoContainer>
    );
};

export default Suggestions;

Suggestions.prototype = {
    suggestions: PropTypes.array,
    handleClick: PropTypes.func,
};

Suggestions.defaultProps = {
    suggestions: [],
    handleClick: undefined,
};

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
