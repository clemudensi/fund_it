import axios from 'axios';
import {FETCH_USER_DASHBOARD} from './types';
import { PATH_BASE } from "../constants";

export const fetchDashboardSuccess = user_dashboard => {
  return {
    type: FETCH_USER_DASHBOARD,
    user_dashboard
  }
};

export default function fetchUserDashboard() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
  return async (dispatch) => {
    try {
      // if (window.location.pathname === '/user/:id/dashboard') {
        const pathname = window.location.pathname.split( '/' );
        const user = await axios.get(`${PATH_BASE}/api/v1/user/${pathname[2]}/dashboard`);
        dispatch(fetchDashboardSuccess(user.data));
      // }
    } catch (err) {
      if(err.status === 401 || 304) {
        // window.location.replace("/");
        return err
      }
    }
  }
}

