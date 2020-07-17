import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import MainNavigation from "../shared/Navigation/MainNavigation";
import Footer from "../shared/Navigation/Footer";

const BlogPage = (props) => {
  const { path, url } = useRouteMatch();

  return (
    <React.Fragment>
      <MainNavigation type={props.type} url={url} />
      <main>
        <Switch>
          <Route path={path} exact>
            <h1>ARTIGOS</h1>
          </Route>
          <Route path={`${path}/artigos/:artigoId`} exact>
            <h1>ARTIGO 1</h1>
          </Route>
          <Route path={`${path}/videos`}>
            <h1>VIDEOS</h1>
          </Route>
          <Route path={`${path}/videos/:videoId`}>
            <h1>VIDEO 2</h1>
          </Route>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default BlogPage;
