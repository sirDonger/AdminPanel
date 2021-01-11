import {LOGIN} from "../action-types";

export const login = (payload) => {
    return dispatch => {
        dispatch({type: LOGIN, payload: payload});
    }
}