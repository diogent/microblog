import actions from "../constants/constActions";
import {userCreate} from "../../APIs/apiService"

const register = user => ({type: actions.register, user})

export const userCreation = user => dispatch => {
    return userCreate(user).then(res => dispatch(register(res)));
};
