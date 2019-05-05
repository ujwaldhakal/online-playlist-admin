import React from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
// import Auth from '../../services/auth';
// import Storage from '../../services/storage'
import './login.scss';

type StateType = {
    email: string,
    password: string,
    error:string
};

class Login extends React.Component<{}, StateType> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e: any) {
        e.preventDefault();
        try{
            // const res = (await Auth.login(this.state)).data;
            // console.log(res);
            // Storage.set('access_token', res.access_token);
        }catch(error){
            console.log(error);            
            this.setState({
                error:error.response.data.message
            })
        }

    }

    async handleChange(e: any) {
        this.setState({
                [e.target.name]: e.target.value
            } as any);

    }

    render() {
        const {email, password} = this.state;
        return (
            <Row type="flex" justify="center" className="login-container">                
                <Col span={14} className="login-container--left">
                </Col>
                <Col span={10}>
                <div className="login-container--right">
                {this.state.error && <span className="login-container-error">{this.state.error}</span>}
                <h1>Login</h1>
                <p>Welcome back, sign in with your playlist account</p>
                    <Form onSubmit={this.handleSubmit} className="login-container-form">
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
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-container-button"
                            >
                                Log in
                            </Button>                            
                            <br/>             
                            <p>Don't have an account?  &nbsp;
                                <Link to="/register">
                                    Register Now!
                                </Link>
                            </p>               
                        </Form.Item>
                    </Form>
                </div>
                </Col>
            </Row>
        );
    }
}

export default Login;
