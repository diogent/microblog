import actions from "../constants/constActions"


const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.registerSuccess:
      return {...state, user: action.user, registerSuccess: true};
      break;
    case actions.loginSuccess:
      return {...state, user: action.user, loginSuccess: true }
      break;
  }
  return state
}

export default authReducer;
