import {FETCH_ALL_CAMPAIGN} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CAMPAIGN:
      return action.all_campaign;
    default:
      return state;
  }
}
