import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Posts/Header";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
