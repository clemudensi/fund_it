import axios from 'axios';
import {FETCH_CAMPAIGN_VIEW} from './types';

export const fetchCampaignSuccess = view_campaign => {
  return {
    type: FETCH_CAMPAIGN_VIEW,
    view_campaign
  }
};

export default function fetchViewCampaign() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
  return async (dispatch) => {
    try {
      const campaign = await axios.get('/api/v1' + window.location.pathname);
      console.log(window.location.pathname, 'location pathname');
      dispatch(fetchCampaignSuccess(campaign.data))
    } catch (err) {
      if(err.response.status === 401 || 304) {
        window.location.replace('/');
      }
    }
  }
}
