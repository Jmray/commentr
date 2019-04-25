import React, { Component } from 'react';
import axios from 'axios';
import { RepoNav } from '../RepoNav/RepoNav';
import { ThreadNav } from '../ThreadNav/ThreadNav';
import { CommentView } from '../CommentView/CommentView';

export class Dashboard extends Component{

    constructor(){
        super();

        this.state = {
            current_repo: null,
            all_repos: [],
    }
}
componentWillMount(){
    axios.get('/api/repos/2').then(repos => {
        this.setState({
            all_repos: repos,
        });
    });
}


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

