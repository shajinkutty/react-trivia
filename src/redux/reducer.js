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

const initialState = {
  loading: false,
  category: 0,
  difficulty: "default",
  index: 0,
  apiResponse: {},
  currentQuestion: {},
  completed: false,
  error: "",
};

const setCurrentQuestion = (paload) => {
  const incorrectAnswers = paload.incorrect_answers.map((item) => {
    return {
      title: item,
      isCorrectAnswer: false,
    };
  });
  const correctAnswer = {
    title: paload.correct_answer,
    isCorrectAnswer: true,
  };
  const result = [...incorrectAnswers, correctAnswer];
  return {
    ...paload,
    displayOptions: result.sort(() => Math.random() - 0.5),
  };
};

export const triviaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case SELECT_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    case FETCH_INIT:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        apiResponse: action.payload,
        currentQuestion: setCurrentQuestion(action.payload.results[0]),
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case NEXT_QUESTION:
      if (state.index > 9) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        index: state.index + 1,
        currentQuestion: setCurrentQuestion(
          state.apiResponse.results[state.index + 1]
        ),
      };
    case TRIVIA_COMPLETE:
      return {
        ...state,
        completed: true,
      };
    case TRIVIA_INIT:
      return initialState;
    default:
      return state;
  }
};
