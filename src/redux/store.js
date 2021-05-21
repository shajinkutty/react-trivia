import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { triviaReducer } from "./reducer";
import { resultReducer } from "./result/resultReducer";

const rootReducer = combineReducers({
  trivia: triviaReducer,
  finalResult: resultReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
