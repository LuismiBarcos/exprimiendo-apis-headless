import React from "react";
import UsersList from "../components/UsersList";
import TravelsList from "../components/TravelsList";

import HomeViewModel from "../view-models/HomeViewModel";
import AppBar from "../components/AppBar";

export default () => {
  const homeViewModel = new HomeViewModel();
  return (
    <div>
      <AppBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 mt-3">
            <UsersList homeViewModel={homeViewModel} />
          </div>
          <div className="col-9">
            <TravelsList homeViewModel={homeViewModel} />
          </div>
        </div>
      </div>
    </div>
  );
};
