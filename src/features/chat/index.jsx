import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";

function Chat() {
  const { pathname } = useLocation();
  return (
    <>
      <Switch>
        <Route exact path={pathname} component={MainPage} />
      </Switch>
    </>
  );
}

export default Chat;
