import {combineReducers} from 'redux'
import user_login from './reducer_user';
import admin_login from './reducer_admins';
import user_campaign from './reducer_userCampaign';
import all_campaign from './reducer_all_campaign';
import view_campaign from './reducer_campaign_view';
import user_dashboard from './reducer_user_dashboard';
import all_users from './reducer_all_users';
import approval_funds from './reducer_approval_funds'
import user_funded from './reducer_user_funded'

export default combineReducers({
  user_login,
  admin_login,
  user_campaign,
  all_campaign,
  view_campaign,
  user_dashboard,
  all_users,
  approval_funds,
  user_funded
});
