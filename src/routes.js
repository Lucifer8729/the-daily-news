import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
