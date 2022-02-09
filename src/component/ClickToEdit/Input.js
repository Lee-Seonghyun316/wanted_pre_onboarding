import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = ({ name, value, onChange, onBlur }) => {
    return (
        <CustomInput
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
};

export default Input;

Input.prototype = {
    name: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
};

Input.defaultProps = {
    name: "",
    value: [],
    onChange: undefined,
    onBlur: undefined,
};

const CustomInput = styled.input`
  width: 145px;
  all: revert;
  padding: 5px;
  margin: 15px 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray_3};
`;
