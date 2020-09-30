import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./ui/Home";
import Steps from "./ui/Steps";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/steps" exact component={Steps} />
        </Switch>
      </div>
    </Router>
  );
}
