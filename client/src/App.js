import React from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import Locations from "./component/Locations";

const App = () => {
  // return <h1>hi</h1>;
  return (
    <div>
      <Header />
      <Locations />
    </div>
  );
};

export default App;
