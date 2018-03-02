import { FETCH_ALL_MONTHS } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ALL_MONTHS:
    return Object.assign({}, ...state, {
      data: action.data
    });
    default:
      return state;
  }
  return state;
}