import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/helpers/history";






const RouterComponent = () => {
    return (
      <Router history={history}>
        <Switch>
        </Switch>
      </Router>
    );
  };
  export default RouterComponent;