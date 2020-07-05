import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./Component/PrivateRoute/PrivateRoute";
import Join from "./Component/Join/Join";
import Chat from "./Component/Chat/Chat";
import SignIn from "./Component/SignIn/SignIn";
import GenericNotFound from "./Component/GenericNotFound/GenericNotFound";

const App = () => (
  <Router>
    <Switch>
      <Route path="/signin" exact component={SignIn} />
      <ProtectedRoute path="/" exact component={Join} />
      <ProtectedRoute path="/chat" exact component={Chat} />
      <Route component={GenericNotFound} />
    </Switch>
  </Router>
);

export default App;
