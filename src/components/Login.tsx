import React from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import Auth from '../services/auth';

type StateType = {
    email: string,
    password: string,
};

export default class Login extends React.Component<{}, StateType> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e: any) {
        e.preventDefault();
        await Auth.login(this.state);
    }

    async handleChange(e: any) {

        this.setState({
                [e.target.name]: e.target.value
            } as any);

    }

    render() {
        const {email, password} = this.state;
        return (
            <Row type="flex" justify="center">
                <Col span={6}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input
                                onChange={this.handleChange}
                                name="email"
                                value={email}
                                prefix={<Icon type="user"/>}
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                onChange={this.handleChange}
                                name="password"
                                value={password}
                                prefix={
                                    <Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>
                                }
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>Remember me</Checkbox>
                            <br/>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Log in
                            </Button>
                            <br/>
                            Or
                            <Link to="/test">
                                <p>register now!</p>
                            </Link>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}
