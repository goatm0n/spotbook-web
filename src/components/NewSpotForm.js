import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { SPOTS_API_URL } from "../constants";

class NewSpotForm extends Component {
    state = {
        title: "",
        spotType: "",
        description: "",
        auth: ""
    };

    componentDidMount() {
        if (this.props.auth) {
            const accessString = this.props.auth;
            const auth = "Bearer " + accessString;
            this.setState({auth})
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    create = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: SPOTS_API_URL + "create/",
            headers: {
                Authorization: this.state.auth
            },
            data: {
                title: this.state.title,
                spotType: this.state.spotType,
                description: this.state.description
            }
        });
    };

    render() {
        return (
            <Form onClick={this.create}>
                <FormGroup>
                    <Label for="title">Title:</Label>
                    <Input
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.title)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description:</Label>
                    <Input
                        type="text"
                        name="description"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.description)}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    };

}

export default NewSpotForm;