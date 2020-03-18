import axios from 'axios';

const setAuthToken = token => (req, res) => {
  let temp_token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    temp_token = req.headers.authorization.split(' ')[1];
  }

  if (temp_token) {
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('auth_jwt', token);
  } else {
    delete axios.defaults.headers.common['Authorization']
    localStorage.removeItem('auth_jwt');
  }
}

export default setAuthToken;