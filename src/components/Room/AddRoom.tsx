import React, {Component} from 'react';
import {Button, Icon, Input, Modal} from 'antd';
import Room from './../../entities/room';
import {Redirect} from 'react-router';

interface Props {

}

interface State {
    name : string
    modalVisible : boolean,
    shouldRedirect: boolean,
    roomSlug : string
}


export default class AddRoom extends Component<Props, State> {
    room : Room;

    constructor(props: any) {
        super(props);
        this.state = {
            modalVisible: false,
            name: '',
            shouldRedirect : false,
            roomSlug : ''
        }
        this.room = new Room();
    }

    setModalVisible = (value : any) => {
        this.setState({modalVisible: true});
    }

    closeModal = () => {
        this.setState({
            modalVisible: false,
            shouldRedirect: true
        })
    }
    
    submit = async () => {
        try {
            let data = (await this.room.create(this.state.name)).data;
            this.setState({roomSlug : data.slug});
            this.closeModal();



        } catch (e) {
            console.log(e);
        }
    }

    shouldRedirectToCreatedRoom() : boolean
    {
        return this.state.shouldRedirect;
    }

    redirectToCreatedRoom()
    {
        return <Redirect to={this.state.roomSlug+"/djroom"}/>
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({name : e.target.value});
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.setModalVisible}>
                    Add a Room
                    <Icon type="plus"/>
                </Button>
                <Modal
                    title="Add Room"
                    style={{top: 20}}
                    visible={this.state.modalVisible}
                    onOk={this.submit}
                    onCancel={this.closeModal}
                >
                    <Input
                        id="name"
                        placeholder="Room Name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        prefix={<Icon type="user"/>}
                        className="m-b-20"
                    />
                </Modal>

                {this.shouldRedirectToCreatedRoom() ? this.redirectToCreatedRoom() :  false}
            </div>
        )
    }
}
