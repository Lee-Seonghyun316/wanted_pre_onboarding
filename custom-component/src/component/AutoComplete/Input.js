import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = ({ isSuggestions, onClickXBtn, value, onChange }) => {
    return (
        <InputContainer isSuggestions={isSuggestions}>
            <CustomInput type="text" value={value} onChange={onChange} />
            <XBtn onClick={onClickXBtn}>+</XBtn>
        </InputContainer>
    );
};

export default Input;

Input.prototype = {
    isSuggestions: PropTypes.number,
    onClickXBtn: PropTypes.func,
    value: PropTypes.array,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    isSuggestions: 0,
    onClickXBtn: undefined,
    value: [],
    onChange: undefined,
};

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

const CustomInput = styled.input`
  font-weight: ${({ theme }) => theme.fontWeight.bold_600};
  width: 90%;
`;

const XBtn = styled.button`
  transform: rotate(45deg);
  cursor: pointer;
  font-size: 18px;
`;
