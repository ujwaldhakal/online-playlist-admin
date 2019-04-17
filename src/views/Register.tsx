import React from 'react'
import { Formik } from 'formik'
import getYupValidationSchema from '../services/form/validationSchema';
import { RegisterComponent } from '../components//Register/Register';

const initialValues = {
  email: '',
  password: '',
}

export const Register = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getYupValidationSchema}
      onSubmit={onSubmit}
      render={RegisterComponent}
    />
  )
}

function onSubmit(values: any, props:any) {
    props.validateForm();
    props.setSubmitting(false);
    console.log(props);
    setTimeout(() => {
        console.log(values);
    }, 2000)
}
