import React, { useState } from "react";
import "./App.css";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import styled, { ThemeProvider } from "styled-components";
import theme from "./component/theme";
import Tabs from "./component/Tabs";
import Tag from "./component/Tag";
import AutoComplete from "./component/AutoComplete";

function App() {
  const [checked, setChecked] = useState(false);
  const modalText = "HELLO CODESTATES!";
  const [tags, setTags] = useState(["CodeStates", "JJang"]);
  return (
    <Wrap>
      <ThemeProvider theme={theme}>
        <Toggle checked={checked} setChecked={setChecked} />
        <Modal modalText={modalText} />
        <Tabs />
        <Tag tags={tags} setTags={setTags} />
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
