import {FETCH_USERFUNDED_CAMPAIGN} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERFUNDED_CAMPAIGN:
      return action.user_funded;
    default:
      return state;
  }
}
