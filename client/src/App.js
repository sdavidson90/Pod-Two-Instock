import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./styles/main.css";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Locations from "./components/Locations";
import LocationsDetails from "./components/LocationsDetails";
import Product from "./components/Product";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/inventory" component={Inventory} />
          <Route path="/location" component={Locations} />
          <Route path="/product/:id" component={Product} />
          <Redirect to="/inventory" from="/" exact />
          <Redirect to="/inventory" from="/product" exact />
        </Switch>
      </Router>
    );
  }
}
