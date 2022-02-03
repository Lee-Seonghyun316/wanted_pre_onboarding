import React, { useState } from "react";
import "./App.css";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import styled from "styled-components";

function App() {
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Wrap modalvisible={modalVisible}>
      <Toggle checked={checked} setChecked={setChecked} />
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
