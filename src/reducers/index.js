import { combineReducers } from "redux";
import data from "./reducer_load_from_db";

const rootReducer = {
  data: data
};

export default rootReducer;