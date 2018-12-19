import actions from "../constants/constActions";
import errors from "../constants/errors";
import {postCreate} from "../../APIs/apiService"

const createPost = post => ({type: actions.createPost, post});
const error = errorMessage => ({type: actions.error, error: errorMessage});

export const postCreation = post => dispatch => {
  return postCreate(post).then(res => {
    if (res) {
      dispatch(createPost(res));
    } else {
      dispatch(error(errors.postCommon));
    }
  });
}
