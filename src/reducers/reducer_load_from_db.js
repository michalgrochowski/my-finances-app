import { FETCH_ALL_MONTHS } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_MONTHS:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}