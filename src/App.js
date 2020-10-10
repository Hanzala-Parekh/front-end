import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/screen/Home";
import Category from "./component/screen/Category";
import Single from "./component/screen/Single";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Category">
        <Category />
      </Route>
      <Route path="/Single">
        <Single />
      </Route>
    </BrowserRouter>
  );
}

export default App;
