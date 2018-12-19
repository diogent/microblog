import authReducer from './authReducer';
import errorReducer from './errorReducer';
import postReducer from './postReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  post: postReducer
});

export default rootReducer;
