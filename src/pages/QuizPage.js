import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import Quiz from '../components/Quiz';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(8),
    },
  }));
export default function QuizPage() {
    const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Quiz />
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
