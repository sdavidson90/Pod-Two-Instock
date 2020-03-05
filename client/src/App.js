import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./styles/main.css";


import Locations from "./components/Locations";
import LocationsDetails from "./components/LocationsDetails";
import Header from "./components/Header";
import Product from "./components/Product";
import Inventory from "./components/Inventory";

function App() {
  return (

    <div>
      <Header />
      {/* <Locations /> */}
      <LocationsDetails />
    </div>

    <Router>
      <Product />
      {/* <Inventory /> */}
      <Switch>
        {/* <Route path="/locations" component={} /> */}
        <Route path="/inventory" component={Inventory} />
        <Route path="/product/:id" component={Product} />
        {/* <Route path="/" component={} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
