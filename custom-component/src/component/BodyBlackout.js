import React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";

const BodyBlackout = ({ isModalOpen, handleModalClose }) => {
  return <Wrap isModalOpen={isModalOpen} onClick={handleModalClose} />;
};

BodyBlackout.propTypes = {
  isModalOpen: PropTypes.bool,
  handleModalClose: PropTypes.func,
};

export default BodyBlackout;

const Wrap = styled.div`
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
