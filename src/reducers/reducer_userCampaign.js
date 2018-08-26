import {FETCH_USER_CAMPAIGN} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_CAMPAIGN:
      return action.user_campaign;
    default:
      return state;
  }
}
