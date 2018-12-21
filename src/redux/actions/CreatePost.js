import actions from "../constants/constActions";
import errors from "../constants/errors";
import {postCreate, getPostsByUserName} from "../../APIs/apiService"

const postCreation = post => ({type: actions.createPost, post});
const error = errorMessage => ({type: actions.error, error: errorMessage});
const postsRequested = () => ({type: actions.postsReq});
const postsRecieved = posts => ({type: actions.postsRec, payload: posts});

export const createPost = post => dispatch => {
  return postCreate(post).then(res => {
    if (res) {
      dispatch(postCreation(res));
    } else {
      dispatch(error(errors.postCommon));
    }
  });
}

export const getPostsByUser = (userName) => dispatch => {
  dispatch(postsRequested());
  return getPostsByUserName(userName).then(res => {
    if (res) {
      dispatch(postsRecieved(res));
    } else {
      dispatch(error(errors.getPostsError));
    }
  });
}
