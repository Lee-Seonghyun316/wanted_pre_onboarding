import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import BodyBlackout from "./BodyBlackout";
import * as PropTypes from "prop-types";

const Modal = ({ modalText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = (state) => {
    setIsModalOpen(state);
  };
  return (
    <Container title="Modal">
      <BodyBlackout
        isModalOpen={isModalOpen}
        handleModalClose={() => handleModalOpen(false)}
      />
      <ShowModalBtn onClick={() => handleModalOpen(true)}>
        Open Modal
      </ShowModalBtn>
      <ModalWindow modalVisible={isModalOpen}>
        <CloseModalBtn onClick={() => handleModalOpen(false)}>X</CloseModalBtn>
        <Text>{modalText}</Text>
      </ModalWindow>
    </Container>
  );
};

Modal.propTypes = {
  modalText: PropTypes.string,
};

export default Modal;

const ShowModalBtn = styled.button`
  width: 7rem;
  height: 3rem;
  border-radius: 2em;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
`;

const ModalWindow = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  display: ${({ modalVisible }) => (modalVisible ? "flex" : "none")};
  width: 15rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 999;
  border-radius: 0.5em;
`;

const CloseModalBtn = styled.button`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.5rem;
  font-weight: var(--bolder);
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.purple};
`;
