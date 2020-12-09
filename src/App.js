import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <HomePage />
    </React.Fragment>
    // <Router basename="/">
    //   <Switch>
    //     <Route exact path="/" component={HomePage} />
    //   </Switch>
    // </Router>
  );
}

export default App;
