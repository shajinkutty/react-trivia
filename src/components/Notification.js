import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core";
import { OptionContext } from "../context/OptionsContext";

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
  const {
    showResult,
    data,
    totalQuestions,
    currentQuestion,
    setShuffleOptions,
    index,
    setIndex,
    setShowResult,
    currentAnswer,
    setCurrentQuestion,
    setFinish,
  } = useContext(OptionContext);

  const handleClose = () => {
    setShowResult(false);
    nextQuestion();
  };

  const nextQuestion = () => {
    setIndex(index + 1);
    if (index >= totalQuestions) {
      setCurrentQuestion(data.results[index + 1]);
      const incorrectAnswers = currentQuestion.incorrect_answers.map((item) => {
        return {
          title: item,
          isCorrectAnswer: false,
        };
      });
      const correctAnswer = {
        title: currentQuestion.correct_answer,
        isCorrectAnswer: true,
      };
      const result = [...incorrectAnswers, correctAnswer];
      setShuffleOptions(result.sort(() => Math.random() - 0.5));
    }
  };
  return (
    <Snackbar open={showResult} autoHideDuration={2000} onClose={handleClose}>
      <MuiAlert
        severity={currentAnswer ? "success" : "error"}
        className={classes.alert}
      >
        {currentAnswer
          ? "Well Done!..Your answer is Correct"
          : "Sorry!! Your answer is in correct"}
      </MuiAlert>
    </Snackbar>
  );
}
