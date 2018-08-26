import {FETCH_ALL_USER_CAMPAIGN} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USER_CAMPAIGN:
      return action.all_user_campaign;
    default:
      return state;
  }
}
