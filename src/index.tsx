// import 'antd/dist/antd.css';
import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import AuthorizedRoutes from "./routes/Authorized";
import NonAuthorizedRoutes from "./routes/NonAuthorized";
import App from './App'

ReactDOM.render(
    // <Router>
    //     <Switch>
    //         {NonAuthorizedRoutes.map((prop, key) => {
    //             return prop.route;
    //         })}
    //         {AuthorizedRoutes.map((prop, key) => {
    //             return prop.route;
    //         })}
    //     </Switch>
    // </Router>
    <App />,
    document.getElementById("root")
);
