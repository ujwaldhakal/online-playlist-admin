import React, { Component } from 'react';
import { Button, Icon, Modal, Input } from 'antd';

export default class AddRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            name: '',
        }
    }

    setModalVisible = (value) => {
        this.setState({ modalVisible: true });
    }

    closeModal = () => {
        this.setState({
            modalVisible: false
        })
    }

    handleChange = () => {

    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.setModalVisible}>
                    Add a Room
                    <Icon type="plus" />
                </Button>
                <Modal
                    title="Add Room"
                    style={{ top: 20 }}
                    visible={this.state.modalVisible}
                    onOk={this.closeModal}
                    onCancel={this.closeModal}
                >
                    <Input
                        id="name"
                        placeholder="Creator's Name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        prefix={<Icon type="user" />}
                        className="m-b-20"
                    />
                    <Input
                        id="name"
                        placeholder="Creator's Name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        prefix={<Icon type="user" />}
                        className="m-b-20"
                    />
                    <Input
                        id="name"
                        placeholder="Creator's Name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        prefix={<Icon type="user" />}
                    />
                </Modal>
            </div>
        )
    }
}
