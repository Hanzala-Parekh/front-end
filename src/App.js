import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/screen/Home";
import Category from "./component/screen/Category";
import Single from "./component/screen/Single";
import NotFound from "./component/screen/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Category">
          <Category />
        </Route>
        <Route path="/Single">
          <Single />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
