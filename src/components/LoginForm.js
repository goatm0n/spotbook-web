import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    login = e => {
        e.preventDefault();
        axios.post(API_URL + "login/", this.state).then(() => {
                this.props.resetState();
                this.props.toggle();
            });
    };

    render () {
        return (
            <Form onClick={this.login}>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input
                        type="text"
                        name="email"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.email)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password:</Label>
                    <Input
                        type="text"
                        name="password"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.password)}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    }
}

export default LoginForm;