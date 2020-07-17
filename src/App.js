import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./site/MainPage";
import BlogPage from "./blog/BlogPage";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage type="site" />
        </Route>
        <Route path="/blog">
          <BlogPage type="blog" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
