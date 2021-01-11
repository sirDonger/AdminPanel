import {HANDLE_MODAL_CONFIRM_DELETE, HANDLE_MODAL_EDIT_PRODUCT} from "../action-types";

export const handleModalConfirmDelete = () => {
    return dispatch => {
        dispatch({type: HANDLE_MODAL_CONFIRM_DELETE});
    }
}

export const  handleModalEditProduct = () => {
    return dispatch => {
        dispatch({type: HANDLE_MODAL_EDIT_PRODUCT})
    }
}