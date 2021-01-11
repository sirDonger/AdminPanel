import React, {useState} from 'react';
import {connect} from "react-redux";
import {login} from "../actions/loginActions";
import {Button, Form} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import * as formik from 'formik'
import {string} from "prop-types";
import {InputComponent} from "./InputComponent";

//this container is a provider for input component.
// Throws redux actions and store for components.

const InputContainerComponent = (props) => {
    const {actions: {login}} = props;
    const [emailInput, setEmailInput] = useState('');
    const [ isEmailValid, setIsEmailValid] = useState();
    const [passwordInput, setPasswordInput] = useState('')
    const history = useHistory();

    const handleSubmit = () => {
            setIsEmailValid(true);
            history.push('/panel/dashboard')
            login({emailInput, passwordInput})
    }

    const handleChange = (e) => {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(emailInput)) {
            setIsEmailValid(true)
        } else {
            setIsEmailValid(false);
        }
    }

    return (
        <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Form.Group controlId="loginForm">
                <Form.Label>Email address</Form.Label>
                <InputComponent required={true} inputValueFromReduxStore={emailInput}
                                setInputValueToReduxStore={setEmailInput}
                                type={'text'} placeholder={'Email'} isInvalid={isEmailValid} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <InputComponent required={true} inputValueFromReduxStore={passwordInput}
                                setInputValueToReduxStore={setPasswordInput}
                                type={'password'} placeholder={'Password'}/>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!(!isEmailValid && !!passwordInput)}>
                Login
            </Button>
        </Form>
    )
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            login: (payload) => dispatch(login(payload))
        }
    }
}

export const InputContainer = connect(mapStateToProps, mapDispatchToProps)(InputContainerComponent)