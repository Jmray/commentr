import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRegister, AuthLogin, CommentView, RepoView, ProfileView } from './components/index';


export default(

    <Switch>
        <Route path="/auth/login" component={AuthLogin}/>
        <Route path="/auth/register" component={AuthRegister}/>
        <Route path="/comments/:id" render={(props) => (
            <CommentView key={props.match.params.id} {...props}/>
        )}/>
        <Route path="/repos" component={RepoView}/>
        <Route path="/profile" component={ProfileView}/>
        
    </Switch>


)