import axios from 'axios';
import {FETCH_ALL_CAMPAIGN} from './types';

export const fetchCampaignSuccess = all_campaign => {
  return {
    type: FETCH_ALL_CAMPAIGN,
    all_campaign
  }
};

export default function fetchAllCampaign() {
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
