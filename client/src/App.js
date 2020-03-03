import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./styles/main.css";
import Product from "./components/Product";

function App() {
  return (
    <Router>
      <Product />
      {/* <Switch>
        <Route path="/locations" component={} />
        <Route path="/inventory" component={} />
        <Route path="/product" component={Product} />
        <Route path="/" component={} exact />
      </Switch> */}
    </Router>
  );
}

export default App;
