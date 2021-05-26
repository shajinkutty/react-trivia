import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { triviaInitiate } from "../redux/actions";
import { useHistory } from "react-router";
import Score from "../components/Score";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(4),
    margin: theme.spacing(2),
  },
  options: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
  },
  option: {
    padding: ".5rem 2rem",
    marginLeft: theme.spacing(2),
    border: "1px solid #efefef",
    borderRadius: 25,
  },
  wrongAnswer: {
    color: "red",
  },
}));

function ResultPage() {
  const classes = useStyles();
  const { triviaActions } = useSelector((state) => state.finalResult);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(triviaInitiate());
    history.push("/");
  };
  return (
    <Container maxWidth="lg">
      <Paper className={classes.paper}>
        <Score />
        <Grid container style={{ marginBottom: 20 }}>
          <Grid item={8}>
            {triviaActions.map((trivia, index) => (
              <div key={index}>
                <Typography variant="h6">
                  {`${index + 1}.  ${trivia.question}`}
                </Typography>
                {trivia.isAnswerCorrect ? (
                  <CheckCircleOutlineIcon color="secondary" />
                ) : (
                  <HighlightOffIcon color="error" />
                )}

                <div className={classes.options}>
                  {trivia.options.map((option, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      className={
                        !trivia.isAnswerCorrect && i == trivia.yourAnswer
                          ? [classes.option, classes.wrongAnswer]
                          : classes.option
                      }
                      color={option.isCorrectAnswer ? "secondary" : "default"}
                    >
                      {option.title}
                    </Typography>
                  ))}
                </div>
              </div>
            ))}
          </Grid>
        </Grid>
        <Button color="primary" variant="contained" onClick={handleClick}>
          Start New
        </Button>
      </Paper>
    </Container>
  );
}

export default ResultPage;
