import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Navigation from "./components/navigation/Navigation";
// import HomePage from "./pages/homePage/HomePage";
// import SingleBlogPage from "./pages/singleBlogPage/SingleBlogPage";
// import CareerPage from "./pages/careerPage/CareerPage";
// import BlogPage from "./pages/blogPage/BlogPage";
// import ServicePage from "./pages/servicePage/ServicePage";
// import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
const SingleBlogPage = lazy(() =>
  import("./pages/singleBlogPage/SingleBlogPage")
);
const Navigation = lazy(() => import("./components/navigation/Navigation"));
const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const ServicePageTag = lazy(() => import("./pages/servicePage/ServicePageTag"));
const ServicePageCro = lazy(() => import("./pages/servicePage/ServicePageCro"));
const ServicePageBusiness = lazy(() =>
  import("./pages/servicePage/ServicePageBusiness")
);

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
          <Route path="/blogs/:id" exact component={SingleBlogPage} />
          <Route path="/" exact component={HomePage} />
          <Route
            path="/service-tagManagement"
            exact
            component={ServicePageTag}
          />
          <Route path="/service-CRO" exact component={ServicePageCro} />
          <Route
            path="/service-BusinessIntelligence"
            exact
            component={ServicePageBusiness}
          />
          <Route path="/aboutUs" exact component={AboutUsPage} />
          <Route path="/blogs" exact component={BlogPage} />
          <Route path="/works" exact component={BlogPage} />
          <Route path="/career" exact component={CareerPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
