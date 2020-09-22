import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Edit from "./pages/edit/edit";
import Add from "./pages/addUser/add";
import { PrivateRoute } from "./components/privateRoute";
import history from "./history/history";

const RouterApp = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/add" exact component={Add} />
        <PrivateRoute path="/user/:id/edit" exact component={Edit} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
};
export default RouterApp;