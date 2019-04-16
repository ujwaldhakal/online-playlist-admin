import React from 'react'
import LoginComponent from '../components/Login'

interface CustomInputProps {
    currentMenu: string;
}

class Login extends React.Component<CustomInputProps> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div>
                <LoginComponent/>
            </div>
        );
    }
}

export default Login
