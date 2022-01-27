import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./firstpages/About";
import Faq from "./firstpages/Faq";
import Dashboard from "./firstpages/Dashboard";

const Signin = () => {
  return (
    <div className="signin">
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/faq" component={Faq} />
      </Switch>
    </div>
  );
};

export default Signin;
