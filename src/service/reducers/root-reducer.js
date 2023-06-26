import { combineReducers } from "redux";
import reducer from "./Reducer";

const rootReducer = combineReducers({
  // Add other reducers here if needed
  main: reducer,
});

export default rootReducer;
