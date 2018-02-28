import { FETCH_ALL_MONTHS } from "../actions/index";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_ALL_MONTHS:
      return [action.payload, ...state];
    default:
      return state;
  }
}