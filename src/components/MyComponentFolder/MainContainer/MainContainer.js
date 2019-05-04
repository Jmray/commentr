import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'
import { Nav, CommentView, RepoView } from '../../index';
import routes from '../../../routes';
import './MainContainer.css';

export class MainContainer extends Component{

    constructor(){
        super();

        this.state = {
            currentRepo: null,
            
    }
}


    render(){
        return(
            <div className='mainContainer'>
                {routes}
            </div>
        )
    }
}

