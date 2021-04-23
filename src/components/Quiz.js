import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React, { useContext, useState, useEffect } from "react";
import { OptionContext } from "../context/OptionsContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
  },
  correctAnswer: {
    color: "Green",
  },
  optionContainer:{
      display:'flex',
      flexDirection:'column',
      width:'60%'
  },
  option:{
    justifyContent:'end',
    marginTop:theme.spacing(2),
    textTransform:'none'
  }
}));

export default function Quiz() {
  const classes = useStyles();
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const { difficulty, category } = useContext(OptionContext);

  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      let endPoint = "https://opentdb.com/api.php?amount=10";
      if (category !== 0) {
        endPoint = `https://opentdb.com/api.php?amount=10&category=${category}`;
      }
      if (difficulty !== "default") {
        endPoint = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`;
      }
      if ((category !== 0) & (difficulty !== "default")) {
        endPoint = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;
      }
      const response = await fetch(endPoint);
      const data = await response.json();
      setData(data);
      setCurrentQuestion(data.results[index]);
      setloading(false);
    };
    fetchData();
  }, []);

  const handleClick = () => {
    if (index >= 9) {
      return;
    }
    setIndex(index + 1);
    setCurrentQuestion(data.results[index + 1]);
  };

  const randomOptions = () => {
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
    return result.sort(()=>Math.random() - 0.5);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">
        {loading ? "Loading..." : currentQuestion.question}
      </Typography>
      <div className={classes.optionContainer}>
      {!loading
        ? randomOptions().map((item,i) => (
            <Button key={i} variant="outlined" color="primary" className={classes.option}>
              {item.title}
            </Button>
          ))
        : null}
        </div>
      <Button variant="contained" onClick={handleClick}>
        Next
      </Button>
    </Paper>
  );
}
