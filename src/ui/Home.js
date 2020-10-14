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
import Modal from "../components/Modal";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  createButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  startingDate: {
    marginTop: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

export default ({ homeViewModel }) => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tripName = useRef(null);
  const tripDescription = useRef(null);
  const tripStartingDate = useRef(null);
  const tripImage = useRef(null);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
        <Fab
          aria-label="add"
          className={classes.fab}
          color="primary"
          onClick={handleModalOpen}
        >
          <AddIcon />
        </Fab>
        <Modal
          onClose={handleModalClose}
          open={isModalOpen}
          ui={
            <>
              <Typography variant="h3">Create a trip</Typography>
              <div className="mt-3">
                <TextField
                  id="standard-basic"
                  label="Trip name"
                  variant="outlined"
                  ref={tripName}
                  fullWidth
                />
              </div>
              <div className="mt-4">
                <TextField
                  id="standard-textarea"
                  label="Trip description"
                  placeholder="description"
                  rows="4"
                  rowsMax="4"
                  variant="outlined"
                  ref={tripDescription}
                  multiline
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  id="date"
                  className={classes.startingDate}
                  label="Starting date"
                  type="date"
                  ref={tripStartingDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  type="file"
                  ref={tripImage}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload
                  </Button>
                </label>
              </div>
              <div className={classes.createButton}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    homeViewModel
                      .createTrip(
                        tripName.current.lastChild.firstChild.value,
                        tripDescription.current.lastChild.firstChild.value,
                        tripStartingDate.current.lastChild.firstChild.value,
                        tripImage.current.files[0]
                      )
                      .then(handleModalClose);
                  }}
                >
                  Create
                </Button>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};
