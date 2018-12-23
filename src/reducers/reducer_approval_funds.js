import { FETCH_APPROVAL_FUNDS} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_APPROVAL_FUNDS:
      return action.approval_funds;
    default:
      return state
  }
}
