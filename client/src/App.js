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
import axios from "axios";

export default class App extends Component {
  state = {
    instock: "",
    loading: true
  };

  componentDidMount() {
    axios.get("/api/").then(response => {
      this.setState({ instock: response.data });
      console.log(response.data);
    });
  }

  render() {
    const { instock } = this.state;
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
          <Route path="/inventory/product" component={Product} item={instock} />
          <Redirect to="/inventory" from="/" exact />
        </Switch>
      </Router>
    );
  }
}
