import React, {Component} from 'react';
import {Button, Icon, List, Modal, Typography} from 'antd';
import Room from './../../entities/room';
import {Link} from 'react-router-dom'

interface Props {

}

interface State {
    roomList: any,
    modalVisible: boolean,
}


export default class ListRoom extends Component<Props, State> {
    room: Room;

    constructor(props: any) {
        super(props);
        this.state = {
            roomList: [],
            modalVisible: false
        }
        this.room = new Room();
    }

    async componentDidMount() {

    }


    setModalVisible = async (value: any) => {
        try {
            let data = (await this.room.getList()).data;
            this.setState({roomList: data, modalVisible: true});
        } catch (e) {
            console.log(e);
        }
    }

    closeModal = () => {
        this.setState({
            modalVisible: false
        })
    }


    delete = (id: string) => {
        try {
            this.room.delete(id)
            this.closeModal();
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            <div>
                <Button type="primary" onClick={this.setModalVisible}>
                    Room List
                </Button>
                <Modal
                    title="Add Room"
                    style={{top: 20}}
                    visible={this.state.modalVisible}
                    onCancel={this.closeModal}
                >

                    <List
                        bordered
                        dataSource={this.state.roomList}
                        renderItem={(item: any) => (
                            <Link to={item.slug + "/djroom"}>
                                <List.Item>
                                    <Typography.Text mark>{item.name}</Typography.Text> <Icon type="delete"
                                                                                              onClick={() => this.delete(item.id)}/>
                                </List.Item>
                            </Link>
                        )}/>
                </Modal>

            </div>
        )
    }
}
