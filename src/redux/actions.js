import {
  FETCH_ERROR,
  FETCH_INIT,
  FETCH_SUCCESS,
  NEXT_QUESTION,
  SELECT_CATEGORY,
  SELECT_DIFFICULTY,
  TRIVIA_COMPLETE,
  TRIVIA_INIT,
} from "./types";

export const fetchTrivia = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_INIT,
  });
  const { trivia } = getState();
  const { category, difficulty } = trivia;
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

  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    dispatch({
      type: FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error,
    });
  }
};

export const selectCategory = (cat) => {
  return {
    type: SELECT_CATEGORY,
    payload: cat,
  };
};

export const selectDifficulty = (diff) => {
  return {
    type: SELECT_DIFFICULTY,
    payload: diff,
  };
};

export const nextQuestion = () => (dispatch, getState) => {
  const { trivia } = getState();
  const { index } = trivia;
  if (index === 9) {
    dispatch({
      type: TRIVIA_COMPLETE,
    });
  } else {
    dispatch({
      type: NEXT_QUESTION,
    });
  }
};

export const triviaInitiate = () => (dispatch, getState) => {
  dispatch({
    type: TRIVIA_INIT,
  });
  dispatch({
    type: "RESET",
  });
};
