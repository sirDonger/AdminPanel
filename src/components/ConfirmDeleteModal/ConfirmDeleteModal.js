import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {handleModalConfirmDelete} from "../../actions/modalActions";


const ConfirmDeleteModalComponent = (props) => {
    const { actions: { handleModalConfirmDelete }, confirmDeleteShow } = props;
    const handleClose = () => handleModalConfirmDelete();

    return (
        <>
            <Modal show={confirmDeleteShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure that you want to delete this product?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Delete Anyway
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const mapStateToProps = state => {
    return {
        confirmDeleteShow: state.modalReducer.confirmDeleteShow,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            handleModalConfirmDelete: () => dispatch(handleModalConfirmDelete()),
        }
    }
}

export const ConfirmDeleteModal = connect(mapStateToProps,mapDispatchToProps)(ConfirmDeleteModalComponent);
