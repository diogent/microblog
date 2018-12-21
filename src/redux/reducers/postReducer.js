import actions from "../constants/constActions"


const initState = {
  isLoading: true
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.createPost:
      return {...state, post: action.post};
      break;
    case actions.postsReq:
       return {...state, isLoading: true }
    case actions.postsRec:
      return {...state, posts: action.payload, isLoading: false}
      break;
  }
  return state
}

export default postReducer;
