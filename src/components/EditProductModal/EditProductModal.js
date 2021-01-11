import React from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {handleModalConfirmDelete, handleModalEditProduct} from "../../actions/modalActions";
import {InputComponent} from "../InputComponent";


const EditProductModalComponent = (props) => {
    const { actions: { handleModalEditProduct }, editProductShow } = props;

    const handleClose = () => handleModalEditProduct();

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log(e);
    }

    return (
        <>
            <Modal show={editProductShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleSubmit} onChange={handleChange}>
                        <Row>
                            <Col>
                                <Form.Group controlId="loginForm">
                                    <Form.Label>Model</Form.Label>
                                    <Form.Control type={"text"} placeholder={"Model"}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Variant</Form.Label>
                                    <Form.Control type={"text"} placeholder={"Variant"}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const mapStateToProps = state => {
    return {
        editProductShow: state.modalReducer.editProductShow,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            handleModalEditProduct: () => dispatch(handleModalEditProduct()),
        }
    }
}

export const EditProductModal = connect(mapStateToProps,mapDispatchToProps)(EditProductModalComponent);
