import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import Timer from './Timer'
import attendance from './attendance'
import Home from './Home'
import './login.css';

const Admin = () => (
    <Switch>
        <Route path="/Login" component={Login}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Timer" component={Timer}/>
        <Route path="/attendance" component={attendance}/>
    </Switch>
)

export default Admin;