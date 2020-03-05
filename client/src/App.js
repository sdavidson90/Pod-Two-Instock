import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./styles/main.css";
import Header from "./components/Header";
// import Inventory from "./components/Inventory";
// import Locations from "./components/Locations";
import Product from "./components/Product";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Product />
        <Switch>
          {/* <Route
            path="/inventory"
            component={Inventory}
            products={this.state.instock}
          />
          <Route
            path="/locations"
            component={Locations}
            locations={this.state.instock}
          /> */}
          <Route path="/inventory/product" component={Product} />
          <Redirect to="/inventory" from="/" exact />
        </Switch>
      </Router>
    );
  }
}
