import React from "react";
import { Route, Switch } from "react-router-dom";

import Teashops from "./Teashops/Teashops";
import Teashop from "./Teashop/Teashop";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Teashops} />
      <Route exact path="/teashops/:slug" component={Teashop} />
    </Switch>
  );
}
