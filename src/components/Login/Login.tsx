import React from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col} from 'antd';
import './login.scss';


export const LoginComponent = (props: any) => {
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,    
    } = props;

    return (
        <Row type="flex" justify="center" className="login-container">                
            <Col span={14} className="login-container--left">
            </Col>
            <Col span={10}>
            <div className="login-container--right">            
                <h1>Login</h1>
                <p>Welcome, Login using your playlist account, to create playlist, rooms and add songs.</p>
                <Form onSubmit={handleSubmit}                
                    className="login-container-form">      
                    <Form.Item>
                        <Input
                            id="email"
                            placeholder="Enter your email"
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                            prefix={<Icon type="user" />}
                            onBlur={handleBlur}
                            className={
                            errors.email && touched.email ? (
                                'text-input error'
                            ) : (
                                'text-input'
                            )
                            }
                        />
                    </Form.Item>   
                    {errors.email && touched.email && (<div className="input-feedback">{errors.email}</div>)}

                    <Form.Item>
                        <Input
                            id="password"
                            placeholder="Password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            prefix={<Icon type="lock" />}
                            className={
                            errors.password && touched.password ? (
                                'text-input error'
                            ) : (
                                'text-input'
                            )
                            }
                        />
                    </Form.Item>   
                    {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}
                    <Checkbox>Remember me</Checkbox>       
                    <Button
                        type="primary"
                        htmlType="submit" 
                        disabled={isSubmitting}
                        className="login-container-button">
                        Login
                    </Button>                  
                </Form>
            </div>
            </Col>
        </Row>
    );
}
                  