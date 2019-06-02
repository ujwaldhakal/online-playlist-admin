import React from 'react'
import {LoginComponent} from '../components/Login/Login'
import { Formik } from 'formik'
import getYupValidationSchema from '../services/form/validationSchema';
import { withRouter } from 'react-router-dom';
import Auth from '../services/auth';
import Storage from '../services/storage';

const initialValues = {
    email: '',
    password: '',
}

class LoginView extends React.Component<any, any> {

    storage: Storage

    constructor(props: any){
        super(props);   
        this.storage = new Storage;     
    }

    componentDidMount(){
        console.log("mounted");
    }

    handleSubmit = async(values: any, props:any) => {       
        try{
            const res = (await Auth.login(values)).data;        
            this.storage.set("access_token", res.access_token);
            setTimeout(()=>{            
                this.props.history.push('/pagevamp2/djroom');
            },1000)        
        }catch(e){
            console.log(e);
        }
    }

    render(){
        return (
            <Formik
            initialValues={initialValues}
            validationSchema={getYupValidationSchema}
            onSubmit={this.handleSubmit}
            render={LoginComponent}
            />
        )
    }
}

const Login = withRouter(LoginView);

export default Login;
