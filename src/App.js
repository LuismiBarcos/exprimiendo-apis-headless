import React from "react";
import { Switch ,Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./ui/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
