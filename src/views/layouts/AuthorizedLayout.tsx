import React from 'react';
import Auth from './../../../src/services/auth'
import {currentUser} from './../../actions/user'
import {connect} from 'react-redux'

interface props
{
    dispatch : any
}

class AuthorizedLayout extends React.Component<props,{}> {
    auth: Auth;

    constructor(props: any) {
        super(props);
        this.auth = new Auth;
    }

    async componentDidMount() {
        console.log("this is where check ");
        try {
            let user = await this.auth.authenticate();
            this.props.dispatch(currentUser(user))
        } catch (e) {
            console.log("yeah");
        }
    }

    render() {
        return <div>
            {this.props.children}
        </div>
    }
}

const mapStateToProps = (state: any) => ({
    user: state.user,
});

export default connect(mapStateToProps)(AuthorizedLayout)
