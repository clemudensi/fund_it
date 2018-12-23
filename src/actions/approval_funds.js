import axios from 'axios';
import {FETCH_APPROVAL_FUNDS} from './types';
import {PATH_BASE} from "../constants";

export const fetchApprovalFundsSuccess = approval_funds => {
  return {
    type: FETCH_APPROVAL_FUNDS,
    approval_funds
  }
};

export default function fetchApprovalFunds() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
  return async (dispatch) => {
    try {
      const approval_funds = await axios.get(`${PATH_BASE}/api/v1/campaign/funds-approval`);
      dispatch(fetchApprovalFundsSuccess(approval_funds.data))
    } catch (err) {
      return err
    }
  }
}
