import { combineReducers } from "redux";
import { apiReducer } from "./apiRedux";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  api: apiReducer,
});

export default rootReducer;
