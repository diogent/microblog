import actions from "../constants/constActions"


const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.register:
      console.log('user', action.user);
      return {...state, user: action.user};
      break;
    case actions.loginSuccess:
      console.log({user: action.user});
      return {...state, user: action.user, loginSuccess: true }
      break;
      case actions.loginFailed:
        return {...state, loginSuccess: false}
        break;
  }
  return state
}

export default authReducer;
