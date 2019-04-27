import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dashboard } from './components/index';
import { AuthLogin } from './components/index';
import { AuthRegister } from './components/index';


export default(

    <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/auth/login" component={AuthLogin}/>
        <Route path="/auth/register" component={AuthRegister}/>
        <Redirect to='/dashboard'/>
    </Switch>


)