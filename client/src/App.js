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

import Locations from "./components/Locations";
import LocationsDetails from "./components/LocationsDetails";
import Product from "./components/Product";
import Inventory from "./components/Inventory";

export default class App extends Component {
  // state = {};

  render() {
    return (
      <div>
        <Router>
          <Header />
          {/* <Locations path="/locations" component={Locations} /> */}
          {/* <LocationsDetails
            path="/locations-details"
            component={LocationsDetails}
          /> */}

          {/* <Product /> */}
          {/* <Inventory /> */}
          <Switch>
            <Route path="/locations" component={Locations} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/product/:id" component={Product} />
            {/* <Route path="/" component={} exact /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Header />
//         <Product />
//         <Switch>
//           {/* <Route
//             path="/inventory"
//             component={Inventory}
//             products={this.state.instock}
//           />
//           <Route
//             path="/locations"
//             component={Locations}
//             locations={this.state.instock}
//           /> */}
//           <Route path="/inventory/product" component={Product} />
//           <Redirect to="/inventory" from="/" exact />
//         </Switch>
//       </Router>
//     );
//   }
// }
