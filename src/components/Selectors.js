import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import React, { useContext } from "react";
import CategorySelect from "./CategorySelect";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { OptionContext } from "../context/OptionsContext";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  formControl: {
    width: "80%",
    marginTop: theme.spacing(5),
  },
  btn: {
    marginTop: theme.spacing(2),
    width: theme.spacing(15),
  },
}));
export default function Selectors() {
  const classes = useStyles();
  const history = useHistory();
  const {difficulty, setDifficulty} = useContext(OptionContext)
  const handleClick = ()=>{
      history.push('/quiz')
  }
  return (
    
        <Paper className={classes.paper}>
          <Typography variant="h6">Choose your Level</Typography>
          <CategorySelect />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Difficulty</InputLabel>
            <Select
              label="Difficulty"
              name="name"
              value={difficulty}
              className={classes.select}
              onChange={(e)=>setDifficulty(e.target.value)}
            >
              <MenuItem value="default">Any Difficulty</MenuItem>
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>
          </FormControl>
          <Button
          onClick={handleClick}
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            Start
          </Button>
        </Paper>

  );
}
