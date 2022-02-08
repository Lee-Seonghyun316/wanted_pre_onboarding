import React from "react";
import styled from "styled-components";

const Container = ({ title, children }) => (
  <Wrap>
    <Title>{title}</Title>
    {children}
  </Wrap>
);

export default Container;

const Wrap = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray_3};
  width: 70vw;
  min-width: 300px;
  max-width: 700px;
  height: 300px;
  min-height: 150px;
  margin: 50px auto 0 auto;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 0px ${({ theme }) => theme.colors.gray_5};
`;

const Title = styled.h2`
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold_900};
  font-size: 17px;
`;
