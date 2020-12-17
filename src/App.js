import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
const Navigation = lazy(() => import("./components/navigation/Navigation"));
const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const ServicePage = lazy(() => import("./pages/servicePage/ServicePage"));
const AboutUsPage = lazy(() => import("./pages/aboutUsPage/AboutUsPage"));
const CareerPage = lazy(() => import("./pages/careerPage/CareerPage"));
const BlogPage = lazy(() => import("./pages/blogPage/BlogPage"));

function App() {
  return (
    // <React.Fragment>
    //   <Navigation />
    //   <HomePage />
    // </React.Fragment>
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense
        fallback={
          <div className="Loader-container">
            <div className="circle"></div>
          </div>
        }
      >
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/service" exact component={ServicePage} />
          <Route path="/aboutUs" exact component={AboutUsPage} />
          <Route path="/blogs" exact component={BlogPage} />
          <Route path="/career" exact component={CareerPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
