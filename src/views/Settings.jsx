import React, { Component } from 'react'
import { Row, Col, Avatar, Card, Icon } from 'antd';
import AddRoom from '../components/Room/AddRoom';
export default class Settings extends Component {

    constructor(props) {
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
                            {/* <Card
                                style={{ width: '100%' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                            >
                                <Card.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>, */}
                        </Col>
                        <Col span={2}></Col>
                        <Col span={11} className="settings-box">
                            <Avatar className="m-b-20" size={64} icon="database" />
                            <h2>Host Settings</h2>
                            <AddRoom />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
