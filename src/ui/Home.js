import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../components/Card";
import HomeViewModel from "../view-models/HomeViewModel";

export default () => {
  const homeViewModel = new HomeViewModel();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    homeViewModel.getBlogPosts(setBlogs);
  }, [homeViewModel]);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <UsersList />
        </div>
      </div>
    </div>
  );
};
