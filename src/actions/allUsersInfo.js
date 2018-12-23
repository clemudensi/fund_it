import axios from 'axios';
import {FETCH_ALL_USERS} from './types';
import {PATH_BASE } from "../constants";

export const fetchUsersInfoSuccess = all_users => {
  return {
    type: FETCH_ALL_USERS,
    all_users
  }
};

export default function fetchAllUsersInfo() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
  return async (dispatch) => {
    try {
      const users = await axios.get(`${PATH_BASE}/api/v1/users-info`);
      dispatch(fetchUsersInfoSuccess(users.data));
    } catch (err) {
      if(err.status === 401 || 304) {
        return err
      }
    }
  }
}

