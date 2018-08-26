import {FETCH_SINGLE_USER_CAMPAIGN} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SINGLE_USER_CAMPAIGN:
      return action.single_user_campaign;
    default:
      return state;
  }
}
