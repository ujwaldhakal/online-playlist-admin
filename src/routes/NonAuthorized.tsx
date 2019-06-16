import Login from './../views/Login';
import Settings from '../views/Settings';
import {Register} from './../views/Register';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Room from "./../views/Dj-floor"

const nonAuthorized = [
    {'route': <Route exact path="/login" key="login" render={() => <Login />}/>},
    {'route': <Route exact path="/register" key="register" render={() => <Register />}/>},
    {'route': <Route exact path="/" key="login" render={() => <Login />}/>},

];

export default nonAuthorized;
