import actions from "../constants/constActions";
import errors from "../constants/errors";
import {postCreate, getPostsFromDb} from "../../APIs/apiService"

const createPost = post => ({type: actions.createPost, post});
const error = errorMessage => ({type: actions.error, error: errorMessage});
const postsRequested = () => ({type: actions.postsReq});
const postsRecieved = posts => ({type: actions.postsRec, payload: posts});

export const postCreation = post => dispatch => {
  return postCreate(post).then(res => {
    if (res) {
      dispatch(createPost(res));
    } else {
      dispatch(error(errors.postCommon));
    }
  });
}

export const getPosts = () => dispatch => {
  dispatch(postsRequested());
  return getPostsFromDb(user).then(res => {
    if (res) {
      dispatch(postsRecieved(res));
    } else {
      dispatch(error(errors.getPostsError));
    }
  });
}
