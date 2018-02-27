import { combineReducers } from "redux";
import LoadFromDb from "./reducer_load_from_db";

const rootReducer = combineReducers({
  loadData: LoadFromDb
});

export default rootReducer;