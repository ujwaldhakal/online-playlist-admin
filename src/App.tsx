import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Test from './components/Test';
import 'antd/dist/antd.css';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/test" exact component={Test} />
                </Switch>
            </Router>
        </div>
    );
};
export default App;
