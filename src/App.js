import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./ui/Home";
import Steps from "./ui/Steps";
import AppBar from "./components/AppBar";
import HomeViewModel from "./view-models/HomeViewModel";
import StepsViewModel from "./view-models/StepsViewModel";
import LoginViewModel from "./view-models/LoginViewModel";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./ui/Login";
import AppBarViewModel from "./view-models/AppBarViewModel";

export default function App() {
  const homeViewModel = new HomeViewModel();
  const stepsViewModel = new StepsViewModel();
  const loginViewModel = new LoginViewModel();
  const appBarViewModel = new AppBarViewModel();
  return (
    <Router>
      <div className="App">
        <AppBar viewModel={appBarViewModel} />
        <Switch>
          <Route path="/signin" exact>
            <Login loginViewModel={loginViewModel} />
          </Route>
          <PrivateRoute
            component={Home}
            viewModel={homeViewModel}
            loginViewModel={loginViewModel}
            path="/"
            exact
          />
          <PrivateRoute
            component={Steps}
            loginViewModel={loginViewModel}
            viewModel={stepsViewModel}
            path="/:travelId/steps"
            exact
          />
        </Switch>
      </div>
    </Router>
  );
}
