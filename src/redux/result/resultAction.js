export const shootTrivia = (payload) => {
  return {
    type: "SHOOT_TRIVIA",
    payload,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
