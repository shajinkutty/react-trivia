import React from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  scoreCard: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    border: "5px solid pink",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
  },
}));

export default function Score() {
  const { totalScore } = useSelector((state) => state.finalResult);
  const classes = useStyles();
  return (
    <div className={classes.scoreCard}>
      <div className={classes.circle}>{(totalScore / 10) * 100}%</div>
      <p>Your Score</p>
    </div>
  );
}
