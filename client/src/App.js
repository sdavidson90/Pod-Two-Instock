import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./styles/main.css";
import axios from "axios";
import Header from "./components/Header";
// import Inventory from "./components/Inventory";
// import Locations from "./components/Locations";
import Locations from "./components/Locations";
import LocationsDetails from "./components/LocationsDetails";
import Product from "./components/Product";
import Inventory from "./components/Inventory";

export default class App extends Component {
  state = {
    instock: [],
    loading: true
  };
  componentDidMount() {
    axios.get(`/api`).then(response => {
      this.setState({ instock: response.data, loading: false });
    });
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/inventory" component={Inventory} />
          <Route path="/location" component={Locations} />
          <Route path="/product/:id" component={Product} />
          <Redirect to="/inventory" from="/" exact />
        </Switch>
      </Router>
    );
  }
}
