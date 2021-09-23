import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Posts/Header";
import MainLayout from "./hoc/mainLayout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Routes;
