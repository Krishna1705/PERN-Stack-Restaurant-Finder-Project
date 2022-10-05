import * as React from "react";
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import RestaurantDetail from "./routes/RestaurantDetail";
import Update from "./routes/Update";
import Home from "./routes/Home";
import {RestaurantsContextProvider} from './context/RestaurantsContext';

function App() {
  return (
  <RestaurantsContextProvider>
    <div className="container">
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/restaurants/:id" component={RestaurantDetail}/>
        <Route exact path="/restaurants/:id/update" component={Update}/>
      </Switch>
    </Router>
    </div>
  </RestaurantsContextProvider>
  );
}

export default App;
