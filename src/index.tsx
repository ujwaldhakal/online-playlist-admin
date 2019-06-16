import 'antd/dist/antd.css';
import './index.css';
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import AuthorizedRoutes from "./routes/Authorized";
import NonAuthorizedRoutes from "./routes/NonAuthorized";
import configureStore from "./store";
import createHistory from "history/createBrowserHistory";
import App from './App'

export const store = configureStore();
ReactDOM.render(
    <Provider store={store}>

    <Router>
        <Switch>            
            {NonAuthorizedRoutes.map((prop, key) => {
                return prop.route;
            })}
            {AuthorizedRoutes.map((prop, key) => {
                return prop.route;
            })}
        </Switch>
    </Router>
    </Provider>
    ,
    document.getElementById("root")
);
