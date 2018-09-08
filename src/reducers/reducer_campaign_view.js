import {FETCH_CAMPAIGN_VIEW} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CAMPAIGN_VIEW:
      return action.view_campaign;
    default:
      return state;
  }
}
