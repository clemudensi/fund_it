import axios from 'axios';
import {FETCH_USER_CAMPAIGN} from './types';
import { PATH_BASE } from "../constants";

export const fetchCampaignSuccess = user_campaign => {
  return {
    type: FETCH_USER_CAMPAIGN,
    user_campaign
  }
};

export default function fetchUserCampaign() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
  return async (dispatch) => {
    try {
      const pathname = window.location.pathname.split( '/' );
      const campaign = await axios.get(`${PATH_BASE}/api/v1/user/${pathname[2]}/campaigns`);
      dispatch(fetchCampaignSuccess(campaign.data))
    } catch (err) {
      if(err.status === 401 || 304) {
        return err
      }
    }
  }
}
