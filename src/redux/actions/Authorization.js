import actions from "../constants/constActions";
import {userCreate, userLogin} from "../../APIs/apiService"


const loginSuccess = user => ({type: actions.loginSuccess, user});
const loginFailed = () => ({type: actions.loginFailed});
const registerSuccess = user => ({type: actions.register, user});
const registerFailed = () => ({type: actions.registerFailed})

export const userCreation = user => dispatch => {
    return userCreate(user).then(res => dispatch(registerSuccess(res)));
};

export const uLogin = user => dispatch => {
  return userLogin(user).then(res => {
    if (res) {
      dispatch(loginSuccess(res));
    }else{
      alert('Login failed');
    }
  });
};
