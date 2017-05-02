import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponenet = () => {
    return (
        <Router>
            <Scene key="login" component={LoginForm} title="Please Login" />
        </Router>
    );
};

export default RouterComponenet;
