import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { triviaInitiate } from "../redux/actions";
import { useHistory } from "react-router";

export default function AlertComplete(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(triviaInitiate());
    history.push("/");
  };
  return (
    <div>
      <Dialog
        open={props.finish}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Your Score"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary">Show the Result</Button>
          <Button color="primary" autoFocus onClick={handleClick}>
            Start Again
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
