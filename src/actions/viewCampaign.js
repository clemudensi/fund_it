import axios from 'axios';
import {FETCH_CAMPAIGN_VIEW} from './types';
import {PATH_BASE} from "../constants";

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
      const campaign = await axios.get(`${PATH_BASE}/api/v1` + window.location.pathname);
      console.log(campaign)
      dispatch(fetchCampaignSuccess(campaign.data))
    } catch (err) {
      if(err.status === 401 || 304) {
        // window.location.replace('/');
        return err
      }
    }
  }
}
