import actions from "../constants/constActions"


const initState = {};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.createPost:
      return {...state, post: action.post};
      break;
  }
  return state
}

export default postReducer;
