import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import Navigation from "./components/navigation/Navigation";
// import HomePage from "./pages/homePage/HomePage";
// import SingleBlogPage from "./pages/singleBlogPage/SingleBlogPage";
// import CareerPage from "./pages/careerPage/CareerPage";
// import BlogPage from "./pages/blogPage/BlogPage";
// import ServicePage from "./pages/servicePage/ServicePage";
// import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
// import SingleWorkPage from "./pages/singleWorkPage/SingleWorkPage";
// import WorkPage from "./pages/workPage/WorkPage";
// import ToolsNexA from "./pages/toolsPage/ToolsNexA";

const SingleBlogPage = lazy(() =>
  import("./pages/singleBlogPage/SingleBlogPage")
);
const SingleWorkPage = lazy(() =>
  import("./pages/singleWorkPage/SingleWorkPage")
);
const Navigation = lazy(() => import("./components/navigation/Navigation"));
const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const ServicePage = lazy(() => import("./pages/servicePage/ServicePage"));

const AboutUsPage = lazy(() => import("./pages/aboutUsPage/AboutUsPage"));
const CareerPage = lazy(() => import("./pages/careerPage/CareerPage"));
const BlogPage = lazy(() => import("./pages/blogPage/BlogPage"));
const WorkPage = lazy(() => import("./pages/workPage/WorkPage"));
const ToolsNexA = lazy(() => import("./pages/toolsPage/ToolsNexA"));

function App() {

  // let { isLoading } = useSelector(({nexloid})=>({
  //   isLoading: nexloid.isLoading
  // }));
  let forwardingURLS = { 
    articles: [
    '/tips-to-get-certified-in-google-analytics-individual-qualification-gaiq',
    '/google-tag-manager-pro-tips', 
    '/google-optimize-360-personalization',
    '/how-to-make-google-optimize-to-personalize-your-visitor-experience',
    '/integrating-your-mobile-firebase-analytics-with-bigquery-pros-and-cons',
    '/new-functional-extensions-in-tableau-dashboards',
    '/how-digital-analytics-has-changed-after-covid-19',
    '/2020-festive-season-for-e-commerce-businesses',
    '/top-sale-tips-to-boost-the-black-friday-sale',
    '/importance-of-analytics-in-business',
    '/google-tag-manager-easy-setup',
    '/conversion-rate-optimization-guide',
    '/rich-snippets-how-it-improves-your-ctr'
    ],
    works: [
      '/how-a-beauty-brand-quadrupled-its-traffic',
      '/60-percent-increase-in-pdp-views-and-traffic'
    ]
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={
         <div className="Loader-container">
         <div className="circle"></div>
       </div>
      }>
        {/* {
          isLoading?(
           
          ):null
        } */}
        
        <Navigation />
        <Switch>
          <Route path="/articles/:id" exact component={SingleBlogPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="/service/:serviceID" exact component={ServicePage} />
          <Route path="/tools/Nex-A" exact component={ToolsNexA} />
          <Route path="/aboutUs" exact component={AboutUsPage} />
          <Route path="/articles" exact component={BlogPage} />
          <Route path="/works" exact component={WorkPage} />
          <Route path="/works/:id" exact component={SingleWorkPage} />
          <Route path="/career" exact component={CareerPage} />

          {/* old url forwarding */}
          {
            forwardingURLS.articles.length?forwardingURLS.articles.map((data, index) => (
              <Redirect from={data} key={index} to={`/articles${data}`} />
            )):null
          }

          {
            forwardingURLS.works.length?forwardingURLS.works.map((data, index) => (
              <Redirect from={data} key={index} to={`/works${data}`} />
            )):null
          }
          
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
