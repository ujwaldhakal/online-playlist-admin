import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Test from './components/Test';
<<<<<<< HEAD
import 'antd/dist/antd.css';
=======
import './App.css'
>>>>>>> changes

const App = () => {
    return (        
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/test" exact component={Test} />
            </Switch>
        </Router>
        
    );
};
export default App;
