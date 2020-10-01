import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./ui/Home";
import Steps from "./ui/Steps";
import AppBar from "./components/AppBar";
import HomeViewModel from "./view-models/HomeViewModel";
import StepsViewModel from "./view-models/StepsViewModel";

export default function App() {
  const homeViewModel = new HomeViewModel();
  const stepsViewModel = new StepsViewModel();
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Switch>
          <Route path="/" exact>
            <Home homeViewModel={homeViewModel} />
          </Route>
          <Route path="/:travelId/steps" exact>
            <Steps stepsViewModel={stepsViewModel} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
