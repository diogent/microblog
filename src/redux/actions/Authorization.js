import actions from "../constants/constActions";
import {userCreate, userLogin} from "../../APIs/apiService"

const loginSuccess = user => ({type: actions.loginSuccess, user});
const loginFailed = () => ({type: actions.loginFailed});
const register = user => ({type: actions.register, user});

export const userCreation = user => dispatch => {
    return userCreate(user).then(res => dispatch(register(res)));
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
