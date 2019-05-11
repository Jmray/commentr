import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { AuthRegister, AuthLogin, CommentView, RepoView, ProfileView } from './components/index';


export default(

    <Switch>
        <Route path="/auth/login" component={AuthLogin}/>
        <Route path="/auth/register" component={AuthRegister}/>
        <Route path="/comments/:repoId/:replyId" render={(props) => (
            <CommentView key={props.match.params.repoId} replyId={props.match.params.replyId} {...props}/>
        )}/>
        <Route path="/comments/:id" render={(props) => (
            <CommentView key={props.match.params.repoId} {...props}/>
        )}/>
        <Route path="/home" component={RepoView}/>
        <Route path="/profile" component={ProfileView}/>
        
    </Switch>


)