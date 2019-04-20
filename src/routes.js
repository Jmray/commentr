import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Auth } from './components/Auth/Auth';


export default(

    <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/auth" component={Auth}/>
        <Redirect to='/dashboard'/>
    </Switch>


)