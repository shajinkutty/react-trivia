import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Selectors from "../components/Selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(8),
  },
}));
export default function Options() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Selectors />
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
