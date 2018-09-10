import {combineReducers} from 'redux'
import user_login from './reducer_users';
import admin_login from './reducer_admins';
import user_campaign from './reducer_userCampaign';
import all_campaign from './reducer_all_campaign';
import view_campaign from './reducer_campaign_view';

export default combineReducers({
  user_login,
  admin_login,
  user_campaign,
  all_campaign,
  view_campaign
});
