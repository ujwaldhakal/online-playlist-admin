import {Redirect, Route} from 'react-router-dom'
import React from "react";
import Storage from "./../services/storage"
import AuthorizedLayout from "./../views/layouts/AuthorizedLayout"
import DJRoom from "./../views/Dj-floor"
import Settings from "../views/Settings";
import Room from "../views/Dj-floor";

let localStorage = new Storage();

interface RouteProps {
    path: string,
    exact: boolean,
    RouteComponent: any
}

const Authorized = ({component: Component, ...rest}: { component: any, path: string, exact: any, key: any }) => (
    <Route {...rest} render={(props) => (
        localStorage.get('access_token')
            ? <AuthorizedLayout>
                <Component {...props} />
            </AuthorizedLayout>
            : <Redirect to='/login'/>
    )}/>
)


const authorizedRoutes = [

    {'route': <Authorized path="/fuck" exact={true} key="welcome" component={DJRoom}/>},
    {'route': <Authorized exact path="/dashboard" key="dashboard" component={() => <Settings/>}/>},
    {
        'route': <Authorized exact path="/:slug/djroom" key="djroom"
                             component={(props: any) => <Room props={props}/>}/>
    },

];

export default authorizedRoutes;
