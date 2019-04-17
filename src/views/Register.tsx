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
      onSubmit={handleRegister}
      render={RegisterComponent}
    />
  )
}

function handleRegister(values: any, props:any) {    
    props.setSubmitting(false);    
    console.log(values);
    setTimeout(() => {
        console.log(values);
    }, 2000)
}
