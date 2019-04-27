import React, { Component } from 'react';
import axios from 'axios';
import { RepoNav } from '../../index';
import { ThreadNav } from '../../index';
import { CommentView } from '../../index';
import { Nav } from '../../index';

export class Dashboard extends Component{

    constructor(){
        super();

        this.state = {
            current_repo: null,
            repos: [],
    }
}
componentWillMount(){

    axios.get('/api/repos').then(repos => {
        this.setState({
            repos,
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
                <Nav/>
            </div>
        )
    }
}

