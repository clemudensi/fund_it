import {combineReducers} from 'redux'
import user_login from './reducer_users';
import user_campaign from './reducer_userCampaign';
import all_user_campaign from './reducer_all_user_campaigns'

export default combineReducers({
  user_login,
  user_campaign,
  all_user_campaign
});
