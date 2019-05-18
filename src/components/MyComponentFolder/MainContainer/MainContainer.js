import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Nav} from '../../index';
import routes from '../../../routes';
import './MainContainer.css';
import { RepoView } from '../../index';

class MainContainer extends Component{

    constructor(){
        super();

        this.state = {
            currentRepo: null,
            
    }
}


    render(){
        return(
            <div className='mainContainer'>
                <Nav/>
                <Switch>
                    <Route path='/home' component={RepoView}/>
                </Switch>
                {routes}
            </div>
        )
    }
}

export default MainContainer;

