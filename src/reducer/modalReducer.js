import {HANDLE_MODAL_CONFIRM_DELETE, HANDLE_MODAL_EDIT_PRODUCT} from "../action-types";

const initialState = {
    confirmDeleteShow: false,
    editProductShow: false,
};

export const modalReducer = (state = initialState , action) => {
    switch (action.type) {
        case HANDLE_MODAL_CONFIRM_DELETE: {
            return {...state, confirmDeleteShow: !state.confirmDeleteShow}
        }
        case HANDLE_MODAL_EDIT_PRODUCT: {
            return {...state , editProductShow: !state.editProductShow}
        }
        default: return state;
    }
};
