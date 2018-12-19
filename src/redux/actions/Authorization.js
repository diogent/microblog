import actions from "../constants/constActions";
import errors from "../constants/errors";
import {userCreate, userLogin} from "../../APIs/apiService"


const loginSuccess = user => ({type: actions.loginSuccess, user});
const error = errorMessage => ({type: actions.error, error: errorMessage})
const registerSuccess = user => ({type: actions.registerSuccess, user});


export const userCreation = user => dispatch => {
    return userCreate(user).then(res => {
      if (res) {
        dispatch(registerSuccess(res));
      } else {
        dispatch(error(errors.registerCommon));
      }
    });
};

export const uLogin = user => dispatch => {
  return userLogin(user).then(res => {
    if (res) {
      dispatch(loginSuccess(res));
    } else {
      dispatch(error(errors.loginCommon));
    }
  });
};
