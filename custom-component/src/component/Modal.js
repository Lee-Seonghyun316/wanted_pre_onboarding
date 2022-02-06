import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import ModalWindow from "./ModalWindow";

const modalText = "HELLO CODESTATES!";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const openButtonRef = useRef(null);
  const handleClickClose = useCallback(() => {
    setIsModalOpen(true);
    setTimeout(() => modalRef.current.focus());
    console.log(modalRef);
  }, []);
  const handleClickOpen = useCallback(() => {
    setIsModalOpen(false);
    // 모달의 웹 접근성을 위해 시간차를 두고 포커스 이동
    setTimeout(() => openButtonRef.current.focus());
  }, []);

  return (
    <Container title="Modal">
      <ModalOpenButton
        ref={openButtonRef}
        onClick={handleClickClose}
        aria-haspopup="true"
        aria-pressed={isModalOpen}
      >
        Open Modal
      </ModalOpenButton>
      <ModalWindow
        isModalOpen={isModalOpen}
        onModalClose={handleClickOpen}
        modalRef={modalRef}
        modalText={modalText}
      />
    </Container>
  );
};

export default Modal;

const ModalOpenButton = styled.button`
  width: 7rem;
  height: 3rem;
  border-radius: 2em;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
`;
