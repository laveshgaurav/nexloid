import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    // <React.Fragment>
    //   <Navigation />
    //   <HomePage />
    // </React.Fragment>
    <Router basename="/">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
