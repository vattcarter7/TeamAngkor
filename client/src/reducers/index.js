import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { reducer as ToastReducer } from 'react-redux-toastr';
import alert from './alert';
import auth from './auth';

export default combineReducers({
  form: FormReducer,
  alert,
  auth,
  toastr: ToastReducer
});
