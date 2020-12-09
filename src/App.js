import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./pages/homePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router basename="/">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
