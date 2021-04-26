import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React, { useContext, useEffect, useState } from "react";
import { OptionContext } from "../context/OptionsContext";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router";
import AlertComplete from "./AlertComplete";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    minHeight: "300px",
  },
  correctAnswer: {
    color: "Green",
  },
  optionContainer: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
  },
  option: {
    justifyContent: "end",
    marginTop: theme.spacing(2),
    textTransform: "none",
  },
  snackBar: {
    margin: theme.spacing(5),
  },
}));

export default function Quiz() {
  const classes = useStyles();
  const {
    loading,
    data,
    currentQuestion,
    shuffleOptions,
    setShuffleOptions,
    index,
    showResult,
    totalQuestions,
    setShowResult,
    setCurrentAnswer,
    finish,
  } = useContext(OptionContext);

  const history = useHistory();

  const handleAnswerClick = (result) => {
    setCurrentAnswer(result);
    setShowResult(true);
  };

  return (
    <>
      <AlertComplete finish={finish} />
      <Paper className={classes.paper}>
        <Box display="flex" alignItems="center">
          <Box width="100%" mr={1}>
            <LinearProgress
              variant="determinate"
              value={((index + 1) / 10) * 100}
            />
          </Box>
          <Box minWidth={55}>
            <Typography variant="body2" color="textSecondary">
              {index + 1} / 10
            </Typography>
          </Box>
        </Box>
        <Typography variant="h6">
          {loading ? "Loading..." : currentQuestion.question}
        </Typography>
        <div className={classes.optionContainer}>
          {!loading
            ? shuffleOptions.map((item, i) => (
                <Button
                  key={i}
                  variant="contained"
                  color={
                    showResult && item.isCorrectAnswer ? "primary" : "default"
                  }
                  disableElevation
                  className={classes.option}
                  onClick={(result) => handleAnswerClick(item.isCorrectAnswer)}
                >
                  {item.title}
                </Button>
              ))
            : null}
        </div>
      </Paper>
    </>
  );
}
