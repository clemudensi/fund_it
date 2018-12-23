import {FETCH_ALL_USERS} from "actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.all_users;
    default:
      return state;
  }
}
