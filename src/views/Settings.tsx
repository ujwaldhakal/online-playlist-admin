import React, { Component } from 'react'
import { Row, Col, Avatar, Card, Icon } from 'antd';
import AddRoom from '../components/Room/AddRoom';
import ListRoom from '../components/Room/ListRoom';

interface Props
{

}

interface State
{
    userAddModal : boolean
}


export default class Settings extends Component<Props,State> {

    constructor(props : any) {
        super(props);
        this.state = {
            userAddModal: false,
        }
    }

    render() {
        return (
            <div>
                <div className="room-header">
                    <h1> Dashboard </h1>
                </div>
                <div className="room-cabin">
                    <Row type="flex" justify="center">
                        <Col span={11} className="settings-box">
                            <Avatar className="m-b-20" size={64} icon="user" />
                            <h2>User Details</h2>
                            <p><b>Name</b>: Ujjwal Dhakal</p>
                            <p><b>Type</b>: Admin</p>

                        </Col>

                        <Col span={2}></Col>
                        <Col span={11} className="settings-box">
                            <Avatar className="m-b-20" size={64} icon="database" />
                            <h2>Be A DJ </h2>
                            <AddRoom />
                        </Col>
                        <br/>
                        <Col span={11} className="settings-box">
                            <Avatar className="m-b-20" size={64} icon="database" />
                            <h2>List of existing room </h2>
                            <ListRoom />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
