import React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";

const ModalWindow = ({ isModalOpen, onModalClose, modalText, modalRef }) => {
    return (
        <div>
            <BlackOut isModalOpen={isModalOpen} onClick={onModalClose} />
            <ModalContent
                ref={modalRef}
                isModalOpen={isModalOpen}
                role="dialog"
                aria-labelledby="modal-jtw"
                tabIndex="0"
            >
                <CloseModalBtn onClick={onModalClose}>X</CloseModalBtn>
                <Text id="modal-jtw">{modalText}</Text>
            </ModalContent>
        </div>
    );
};

ModalWindow.propTypes = {
    isModalOpen: PropTypes.bool,
    onModalClose: PropTypes.func,
    modalText: PropTypes.string,
};

ModalWindow.defaultProps = {
    isModalOpen: true,
    onModalClose: undefined,
    modalText: "HELLO CODESTATES!",
};

export default ModalWindow;

const BlackOut = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.4;
  display: ${({ isModalOpen }) => (isModalOpen ? "block" : "none")};
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
  pointer-events: ${({ isModalOpen }) => (isModalOpen ? "auto" : "none")};
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
  font-weight: ${({ theme }) => theme.fontWeight.bold_900};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.purple};
`;
