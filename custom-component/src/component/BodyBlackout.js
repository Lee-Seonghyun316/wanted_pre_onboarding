import React from "react";
import styled from "styled-components";

const BodyBlackout = ({ modalVisible, changeModalVisible }) => {
  return (
    <Wrap
      modalVisible={modalVisible}
      onClick={() => {
        changeModalVisible(false);
      }}
    />
  );
};

export default BodyBlackout;

const Wrap = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black);
  opacity: 0.4;
  display: ${(props) => (props.modalVisible ? "block" : "none")};
`;
