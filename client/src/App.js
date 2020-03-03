import React from "react";
import "./styles/main.css";
import Modal from "./components/Modal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Modal />
    </div>
  );
}

export default App;
