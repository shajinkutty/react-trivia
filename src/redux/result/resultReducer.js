const initialState = {
  totalScore: 0,
  triviaActions: [],
};

export const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOOT_TRIVIA":
      const isAnswerCorrect = action.payload.item.isCorrectAnswer;
      return {
        ...state,
        totalScore: isAnswerCorrect ? state.totalScore + 1 : state.totalScore,
        triviaActions: [
          ...state.triviaActions,
          {
            question: action.payload.question,
            options: action.payload.displayOptions,
            yourAnswer: action.payload.answer,
            isAnswerCorrect,
          },
        ],
      };
    case "RESET":
      return initialState;

    default:
      return state;
  }
};
