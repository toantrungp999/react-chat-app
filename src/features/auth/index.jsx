import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import { useLocation } from "react-router-dom";

function Auth() {
  const { pathname } = useLocation();
  return (
    <Switch>
      <Route exact path={pathname} component={Login} />
    </Switch>
  );
}

export default Auth;
