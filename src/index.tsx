import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import AuthorizedRoutes from "./routes/Authorized";
import NonAuthorizedRoutes from "./routes/NonAuthorized";

ReactDOM.render(
    <Router>
        <Switch>
            {NonAuthorizedRoutes.map((prop, key) => {
                return prop.route;
            })}
            {AuthorizedRoutes.map((prop, key) => {
                return prop.route;
            })}
        </Switch>
    </Router>,
    document.getElementById("root")
);

