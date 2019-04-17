import { withFormik } from 'formik';
import Auth from '../auth';
import Storage from '../storage';

let storage = new Storage();

export const formik = withFormik({
    mapPropsToValues: () => ({ email: '', password:'' }),
    
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
      else if (!values.password){
        errors.password = 'Required';
      }
      return errors;
    },
  
    async handleSubmit(values, props){    
        try{
            console.log(props);
            const res = (await Auth.login(values)).data;
            storage.set("access_token", res.access_token);      
            props.props.history.push("/test");
            props.setSubmitting(false);
        }catch(e){
            console.log(e);
        }
    },  
    displayName: 'BasicForm', // helps with React DevTools
})
