import React, { useRef, useState } from "react";
import {
  Button,
  Fab,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import UsersList from "../components/UsersList";
import TravelsList from "../components/TravelsList";

export default ({ viewModel: homeViewModel }) => {
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
