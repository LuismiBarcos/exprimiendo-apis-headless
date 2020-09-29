import React from "react";
import "./Home.css";
import UsersList from "../components/UsersList";
import HomeViewModel from "../view-models/HomeViewModel";

export default () => {
  const homeViewModel = new HomeViewModel();
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <UsersList homeViewModel={homeViewModel} />
        </div>
      </div>
    </div>
  );
};
