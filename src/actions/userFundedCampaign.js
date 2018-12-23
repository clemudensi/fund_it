import axios from 'axios';
import {FETCH_USERFUNDED_CAMPAIGN} from './types';
import { PATH_BASE } from "../constants";

export const fetchFundedSuccess = user_funded => {
  return {
    type: FETCH_USERFUNDED_CAMPAIGN,
    user_funded
  }
};

export default function fetchFundedCampaign() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
  return async (dispatch) => {
    try {
      const pathname = window.location.pathname.split( '/' );
      const campaign = await axios.get(`${PATH_BASE}/api/v1/campaign/${pathname[2]}/user-funded`);
      dispatch(fetchFundedSuccess(campaign.data))
    } catch (err) {
      if(err.status === 401 || 304) {
        return err
      }
    }
  }
}
