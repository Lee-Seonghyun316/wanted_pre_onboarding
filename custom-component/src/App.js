import React, { useState } from "react";
import "./App.css";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import styled, { ThemeProvider } from "styled-components";
import theme from "./component/theme";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import AutoComplete from "./component/AutoComplete";

function App() {
  const modalText = "HELLO CODESTATES!";
  return (
    <Wrap>
      <ThemeProvider theme={theme}>
        <Toggle />
        <Modal modalText={modalText} />
        <Tab />
        <Tag />
        <AutoComplete />
      </ThemeProvider>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
