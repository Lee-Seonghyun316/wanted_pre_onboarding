import React from "react";
import styled from "styled-components";

const Toggle = ({ setChecked, checked }) => {
  const on = "ON";
  const off = "OFF";

  return (
    <Wrap>
      <Title>Toggle</Title>
      <ToggleButton
        onChange={() => setChecked(!checked)}
        checked={checked}
        type="checkbox"
      />
      <StateText>Toggle Switch {checked ? on : off}</StateText>
    </Wrap>
  );
};

export default Toggle;

const Wrap = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 0;
  border: 1px solid var(--grey-background);
  width: 70vw;
  min-width: 200px;
  height: 40vh;
  min-height: 150px;
  margin: 50px auto 0 auto;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 0px var(--shadow);
`;

const Title = styled.h3`
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0;
  font-weight: var(--bolder);
`;

const ToggleButton = styled.input`
  z-index: 1;
  width: 5rem;
  height: 2rem;
  background: var(--grey-background);
  border-radius: 2em;
  cursor: pointer;
  position: relative;
  // 체크안함
  ::before {
    content: "";
    z-index: 1;
    width: 10%;
    height: 100%;
    display: block;
    border-radius: 2em 0 0 2em;
    background: none;
    transition: width 0.4s ease-in-out, border-radius 0.2s step-end,
      background 0.37s step-end;
    position: absolute;
    top: 0;
  }
  ::after {
    z-index: 2;
    position: relative;
    content: "";
    display: block;
    width: 1.6em;
    height: 1.6em;
    top: calc((2rem - 1.6em) / 2);
    left: calc((2rem - 1.6em) / 2);
    border-radius: 50%;
    background: var(--white);
    transition: all 0.4s ease-in-out;
  }
  // 체크함
  &:checked {
    ::before {
      content: "";
      z-index: 1;
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 2em;
      background: var(--first);
      position: absolute;
      transition: width 0.4s ease-in-out, border-radius 0.3s step-end;
      top: 0;
    }
    ::after {
      content: "";
      z-index: 2;
      top: calc((2rem - 1.6em) / 2);
      left: calc(5rem - 1.9em);
      width: 1.6em;
      height: 1.6em;
      display: block;
      border-radius: 50%;
      background: var(--white);
      position: relative;
    }
  }
`;

const StateText = styled.p`
  font-weight: var(--bold);
`;
