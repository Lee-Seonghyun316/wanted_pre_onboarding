import React, { useState } from "react";
import styled, { css } from "styled-components";
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

const backgroundStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
`;

const circleStyle = css`
  position: absolute;
  top: calc((2rem - 1.6em) / 2);
  width: 1.6em;
  height: 1.6em;
  z-index: 2;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
`;

const ToggleButton = styled.input`
  width: 5rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.gray_3};
  border-radius: 2em;
  cursor: pointer;
  position: relative;
  // 체크안함
  &::before {
    //토글 배경
    ${backgroundStyle};
    content: "";
    width: 10%;
    border-radius: 2em 0 0 2em;
    background: none;
    transition: width 0.4s ease-in-out, border-radius 0.2s step-end,
      background 0.37s step-end;
  }
  &::after {
    //토글 동그라미
    ${circleStyle};
    content: "";
    left: calc((2rem - 1.6em) / 2);
    transition: all 0.4s ease-in-out;
  }
  // 체크함
  &:checked {
    &::before {
      //토글 배경
      ${backgroundStyle};
      content: "";
      width: 100%;
      border-radius: 2em;
      background: ${({ theme }) => theme.colors.purple};
      transition: width 0.4s ease-in-out, border-radius 0.3s step-end;
    }
    &::after {
      //토글 동그라미
      ${circleStyle};
      content: "";
      left: calc(5rem - 1.9em);
    }
  }
`;

const StateText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold_500};
  margin: 20px;
`;
