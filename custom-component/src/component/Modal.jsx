import React from "react";
import styled from "styled-components";
import Container from "./Container";

const Modal = ({ modalVisible, setModalVisible }) => (
  <Container title="Modal" modalVisible={modalVisible}>
    <ShowModalBtn onClick={() => setModalVisible(true)}>
      Open Modal
    </ShowModalBtn>
    <ModalWindow modalVisible={modalVisible}>
      <CloseModalBtn onClick={() => setModalVisible(false)}>X</CloseModalBtn>
      <Text>HELLO CODESTATES!</Text>
    </ModalWindow>
  </Container>
);

export default Modal;

const ShowModalBtn = styled.button`
  width: 7rem;
  height: 3rem;
  border-radius: 2em;
  background: var(--first);
  color: var(--white);
  z-index: 1;
`;

const ModalWindow = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  display: none;
  display: ${(props) => props.modalVisible && "flex"};
  width: 15rem;
  height: 5rem;
  background: var(--white);
  z-index: 2;
  border-radius: 0.5em;
`;

const CloseModalBtn = styled.button`
  position: absolute;
  top: 5px;
  font-size: 0.5rem;
  font-weight: var(--bolder);
`;

const Text = styled.p`
  color: var(--first);
`;
