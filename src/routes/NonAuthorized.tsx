import Login from './../views/Login'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Room from "./../views/Dj-floor"

const nonAuthorized = [
    {'route': <Route exact path="/login" key="login" render={() => <Login currentMenu={'/welcome'}/>}/>},
    {'route': <Route exact path="/" key="login" render={() => <Login currentMenu={'/welcome'}/>}/>},
    {'route': <Route exact path="/djroom" key="djroom" render={() => <Room />}/>},
];

export default nonAuthorized;
