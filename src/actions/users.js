import axios from 'axios';
import {FETCH_USER_LOGIN} from './types';
import {PATH_BASE} from "../constants";

export const fetchLoginSuccess = user_login => {
  return {
    type: FETCH_USER_LOGIN,
    user_login
  }
};

export default function fetchUsers() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
  return async (dispatch) => {
    const token = localStorage.getItem('id_token');
    try {
      if (token) {
        const pathname = window.location.pathname.split( '/' );
        const user = await axios.get(`${PATH_BASE}/api/v1/user/${pathname[2]}/dashboard`);
        dispatch(fetchLoginSuccess(user.data));
      }
    } catch (err) {
      if(err.status === 401 || 304) {
        // window.location.replace("/");
        return err
      }
    }
  }
}

