import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import { AuthLogin } from './components/AuthLogin/AuthLogin';
import { AuthRegister } from './components/AuthRegister/AuthRegister';


export default(

    <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/auth/login" component={AuthLogin}/>
        <Route path="/auth/register" component={AuthRegister}/>
        <Redirect to='/dashboard'/>
    </Switch>


)