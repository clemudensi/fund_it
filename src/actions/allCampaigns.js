import axios from 'axios';
import {FETCH_ALL_USER_CAMPAIGN} from './types';

export const fetchCampaignSuccess = all_user_campaign => {
  return {
    type: FETCH_ALL_USER_CAMPAIGN,
    all_user_campaign
  }
};

export default function fetchAllUserCampaign() {
  // axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
  return async (dispatch) => {
    try {
      const campaign = await axios.get('/api/v1/campaigns');
      dispatch(fetchCampaignSuccess(campaign.data))
    } catch (err) {
      if(err.response.status === 401 || 304) {
        window.location.replace("/");
      }
    }
  }
}
