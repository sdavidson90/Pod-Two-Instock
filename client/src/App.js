import React from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Locations from "./components/Locations";
import LocationsDetails from "./components/LocationsDetails";

const App = () => {
  // return <h1>hi</h1>;
  return (
    <div>
      <Header />
      {/* <Locations /> */}
      <LocationsDetails />
    </div>
  );
};

export default App;
