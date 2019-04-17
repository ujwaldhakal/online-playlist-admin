import { withFormik } from 'formik';

export const formik = withFormik({
    mapPropsToValues: () => ({ email: '' }),
  
    // Custom sync validation
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          values.email
        )
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      console.log(values);
      console.log("Form submission successful");
    },
  
    displayName: 'BasicForm', // helps with React DevTools
})
