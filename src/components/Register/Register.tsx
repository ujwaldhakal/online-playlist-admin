import React from 'react';
import {Form, Input, Icon, Button, Row, Col} from 'antd';
import './register.scss';

export const RegisterComponent = (props: any) => {
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
                <h1>Register</h1>
                <p>Welcome, Create an account to create and share your room and playlists.</p>
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

                    <Button
                        type="primary"
                        htmlType="submit" 
                        disabled={isSubmitting}
                        className="login-container-button">
                        Register
                    </Button>                  
                </Form>
            </div>
            </Col>
        </Row>
    );
}
