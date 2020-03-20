import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../components/Home";
import US from "../components/US";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/us" component={US} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
