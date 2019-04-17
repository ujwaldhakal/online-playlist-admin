import React from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col} from 'antd';
import {formik} from '../services/formik';

const MyForm = props => {
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        dirty,
    } = props;

    return (
        <Form onSubmit={handleSubmit}>      
            <Form.Item>
                <Input
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
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
            <Button
                type="primary"
                htmlType="submit" disabled={isSubmitting}
                className="login-container-button">
                Log in
            </Button>        
        </Form>
    );
};

export const Test = formik(MyForm);
