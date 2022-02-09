import React from "react";
import "./App.css";
import Toggle from "./component/Toggle/Toggle";
import Modal from "./component/Modal/Modal";
import styled, { ThemeProvider } from "styled-components";
import theme from "./component/theme";
import Tab from "./component/Tab/Tab";
import Tag from "./component/Tag/Tag";
import AutoComplete from "./component/AutoComplete/AutoComplete";
import ClickToEdit from "./component/ClickToEdit/ClickToEdit";

function App() {
  return (
    <Wrap>
      <ThemeProvider theme={theme}>
        <Toggle />
        <Modal />
        <Tab />
        <Tag />
        <AutoComplete />
        <ClickToEdit />
      </ThemeProvider>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
