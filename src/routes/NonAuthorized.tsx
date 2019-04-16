// @material-ui/icons
import Login from './../views/Login'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";


const nonAuthorized = [
    {'route': <Route exact path="/login" key="login" render={() => <Login currentMenu={'/welcome'}/>}/>},
    {'route': <Route exact path="/" key="login" render={() => <Login currentMenu={'/welcome'}/>}/>},
];

export default nonAuthorized;
