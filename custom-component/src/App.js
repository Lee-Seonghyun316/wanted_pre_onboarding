import React, { useState } from "react";
import "./App.css";
import Toggle from "./component/Toggle";

function App() {
  const [checked, setChecked] = useState(false);
  return <Toggle setChecked={setChecked} checked={checked} />;
}

export default App;
