import axios from 'axios';
import Cookies from 'js-cookie';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
    Cookies.set('auth_jwt', token, { expires: 7 });
  } else {
    Cookies.remove('auth_jwt', { path: '' })
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
