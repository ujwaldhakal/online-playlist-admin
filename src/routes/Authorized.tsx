 import {Route, Redirect} from 'react-router-dom'
import React from "react";
import Storage from "./../services/storage"
import AuthorizedLayout from "./../views/layouts/AuthorizedLayout"
import DJRoom from "./../views/Dj-floor"

let localStorage = new Storage();

const Authorized = ({RouteComponent , ...rest} : { RouteComponent : any, path : string, exact: boolean }) => {
    return (
        localStorage.get('access_token') ?
            <AuthorizedLayout>
                <Route {...rest} render={matchProps => (
                    <RouteComponent {...matchProps} />
                )}/>
            </AuthorizedLayout> : <Redirect to="/login/"/>
    )
};


const authorizedRoutes = [

    {'route': <Authorized path="/fuck" exact={true} key="welcome" RouteComponent={DJRoom}/>},

];


export default authorizedRoutes;
