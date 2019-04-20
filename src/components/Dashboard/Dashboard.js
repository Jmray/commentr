import React, { Component } from 'react';
import { Profile } from '../Profile/Profile';
import { RepoNav } from '../RepoNav/RepoNav';
import { ThreadNav } from '../ThreadNav/ThreadNav';
import { CommentView } from '../CommentView/CommentView';

export class Dashboard extends Component{



    render(){
        return(
            <div>
                Dashboard
                <RepoNav/>
                <ThreadNav/> 
                <CommentView/>
            </div>
        )
    }
}

