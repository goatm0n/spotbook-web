import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewSpotForm from "./NewSpotForm";


class NewSpotModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {    
        return (
            <Fragment>
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "200px" }}
                >
                    Create Spot
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Creating Spot</ModalHeader>
                    <ModalBody>
                        <NewSpotForm
                            toggle={this.toggle}
                            spot={this.props.spot}
                            auth={this.props.accessToken}
                        >
                        </NewSpotForm>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewSpotModal;