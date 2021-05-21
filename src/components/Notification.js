import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core";
import { nextQuestion } from "../redux/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  alert: {
    marginBottom: theme.spacing(2),
  },
}));

function MuiAlert(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

export default function Notification(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Snackbar
      open={props.show}
      autoHideDuration={2000}
      onClose={() => dispatch(nextQuestion())}
    >
      <MuiAlert
        severity={props.result ? "success" : "error"}
        className={classes.alert}
      >
        {props.result
          ? "Well Done!..Your answer is Correct"
          : "Sorry!! Your answer is in correct"}
      </MuiAlert>
    </Snackbar>
  );
}
