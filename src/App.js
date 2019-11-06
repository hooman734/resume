import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Personal_import from "./components/Personal_info";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Personal_import></Personal_import>
    </React.Fragment>
  );
}

export default App;
