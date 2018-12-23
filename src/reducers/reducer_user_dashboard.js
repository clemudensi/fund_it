import { FETCH_USER_DASHBOARD } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_DASHBOARD:
      return action.user_dashboard;
    default:
      return state;
  }
};
