import { Grid, makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState, useRef } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import AlertComplete from "./AlertComplete";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./Notification";
import { shootTrivia } from "../redux/result/resultAction";
import Score from "./Score";

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
  },
  option: {
    justifyContent: "end",
    marginTop: theme.spacing(2),
    textTransform: "none",
  },
  snackBar: {
    margin: theme.spacing(5),
  },
  clickedAnswer: {
    color: "red",
  },
}));

export default function Quiz() {
  const classes = useStyles();
  const [answer, setAnswer] = useState(false);
  const [show, setShow] = useState(false);
  const { loading, currentQuestion, completed, index } = useSelector(
    (state) => state.trivia
  );
  const dispatch = useDispatch();
  useEffect(() => {
    setShow(false);
  }, [currentQuestion, completed]);

  return (
    <>
      <Notification show={show} result={answer} />
      <AlertComplete finish={completed} />
      <Paper className={classes.paper}>
        <Box display="flex" alignItems="center">
          <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" value={(index / 9) * 100} />
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
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <div className={classes.optionContainer}>
              {!loading
                ? currentQuestion.displayOptions.map((item, i) => (
                    <Button
                      key={i}
                      variant="contained"
                      color={
                        show && item.isCorrectAnswer ? "secondary" : "default"
                      }
                      disableElevation
                      className={classes.option}
                      onClick={() => {
                        setShow(true);
                        setAnswer(item.isCorrectAnswer);
                        dispatch(
                          shootTrivia({ ...currentQuestion, item, answer: i })
                        );
                      }}
                    >
                      {item.title}
                    </Button>
                  ))
                : null}
            </div>
          </Grid>
          <Grid item xs={4} justify="center" alignItems="center">
            <Score />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
