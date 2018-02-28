import { combineReducers } from "redux";
import data from "./reducer_load_from_db";

const rootReducer = combineReducers({
  data: data
});

export default rootReducer;