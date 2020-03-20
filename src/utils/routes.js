import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import US from "../components/US";
import Home from "../components/Home";
import USPage from "../components/USPage";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/us" component={USPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
