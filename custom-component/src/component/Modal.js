import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import BodyBlackout from "./BodyBlackout";
import * as PropTypes from "prop-types";

const Modal = ({ modalText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const openButtonRef = useRef(null);
  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    window.setTimeout(() => openButtonRef.current.ref.current.focus());
  }, []);
  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
    // 시간차를 두고 포커스 설정
    window.setTimeout(() => modalRef.current.ref.current.focus());
  }, []);

  return (
    <Container title="Modal">
      <BodyBlackout
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
      />
      <ModalOpenButton
        ref={openButtonRef}
        onClick={handleModalOpen}
        aria-haspopup="true"
        aria-pressed={isModalOpen}
      >
        Open Modal
      </ModalOpenButton>
      <ModalWindow
        ref={modalRef}
        modalVisible={isModalOpen}
        role="dialog"
        aria-labelledby="modal-jtw"
        tabIndex="0"
      >
        <CloseModalBtn onClick={handleModalClose}>X</CloseModalBtn>
        <Text id="modal-jtw">{modalText}</Text>
      </ModalWindow>
    </Container>
  );
};

Modal.propTypes = {
  modalText: PropTypes.string,
};

export default Modal;

const ModalOpenButton = styled.button`
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
