import React from "react";
import UsersList from "../components/UsersList";
import TravelsList from "../components/TravelsList";

export default ({homeViewModel}) => {
  return (
    <div>
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
