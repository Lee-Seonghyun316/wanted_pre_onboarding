import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const [ON, OFF] = ["ON", "OFF"];

const Toggle = () => {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked((checked) => !checked);
  };

  return (
    <Container title="Toggle">
      <ToggleButton onChange={handleToggle} checked={checked} type="checkbox" />
      <StateText>Toggle Switch {checked ? ON : OFF}</StateText>
    </Container>
  );
};

export default Toggle;

const ToggleButton = styled.input`
  width: 5rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.gray_3};
  border-radius: 2em;
  cursor: pointer;
  position: relative;
  // 체크안함
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 10%;
    height: 100%;
    border-radius: 2em 0 0 2em;
    background: none;
    transition: width 0.4s ease-in-out, border-radius 0.2s step-end,
      background 0.37s step-end;
  }
  &::after {
    z-index: 2;
    position: absolute;
    content: "";
    width: 1.6em;
    height: 1.6em;
    top: calc((2rem - 1.6em) / 2);
    left: calc((2rem - 1.6em) / 2);
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    transition: all 0.4s ease-in-out;
  }
  // 체크함
  &:checked {
    &::before {
      content: "";
      z-index: 1;
      width: 100%;
      height: 100%;
      border-radius: 2em;
      background: ${({ theme }) => theme.colors.purple};
      position: absolute;
      transition: width 0.4s ease-in-out, border-radius 0.3s step-end;
      top: 0;
    }
    ::after {
      position: absolute;
      content: "";
      z-index: 2;
      top: calc((2rem - 1.6em) / 2);
      left: calc(5rem - 1.9em);
      width: 1.6em;
      height: 1.6em;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.white};
    }
  }
`;

const StateText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold_500};
  margin: 20px;
`;
