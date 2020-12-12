import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./pages/homePage/HomePage";
import ServicePage from "./pages/servicePage/ServicePage";

function App() {
  return (
    // <React.Fragment>
    //   <Navigation />
    //   <HomePage />
    // </React.Fragment>
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/service" exact component={ServicePage} />
      </Switch>
    </Router>
  );
}

export default App;
