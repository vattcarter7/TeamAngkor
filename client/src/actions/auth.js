import axios from 'axios';

import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';

// Load user
export const loadUser = () => async dispatch => {
  try {
    // const res = await axios.get('/api/v1/auth/me');
    const res = await axios.get('/api/v1/auth/loggedin');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Login user
export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/v1/auth/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Register
export const register = ({
  firstname,
  lastname,
  email,
  password
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ firstname, lastname, email, password });

  try {
    const res = await axios.post('/api/v1/auth/register', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    //TODO set error from the server to reducers

    dispatch({ type: REGISTER_FAIL });
  }
};

// Logout
export const logout = () => async dispatch => {
  try {
    await axios.get('/api/v1/auth/logout');
    dispatch({ type: LOGOUT });
  } catch (err) {
    console.log('Unable to logout');
  }
};
