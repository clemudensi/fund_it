import axios from 'axios';
import {FETCH_SINGLE_USER_CAMPAIGN} from './types';

export const fetchCampaignSuccess = single_user_campaign => {
  return {
    type: FETCH_SINGLE_USER_CAMPAIGN,
    single_user_campaign
  }
};

export default function fetchSingleUserCampaign() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
  return async (dispatch) => {
    try {
      const campaign = await axios.get('/api/v1/user/:id/campaign/:id');
      dispatch(fetchCampaignSuccess(campaign.data))
    } catch (err) {
      if(err.response.status === 401 || 304) {
        window.location.replace('/');
      }
    }
  }
}
