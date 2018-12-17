import actions from "../constants/constActions"


const initState = {};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.error:
      return {...state, error: action.error};
      break;
  }
  return state
}

export default errorReducer;
