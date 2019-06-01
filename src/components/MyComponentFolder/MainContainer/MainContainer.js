import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import {connect } from 'react-redux';
import { Nav} from '../../index';
import routes from '../../../routes';
//import {updateRepo} from '../../../actions/Actions';
import './MainContainer.css';
import { RepoView } from '../../index';
import '../../../sass/globalStyles.scss'

class MainContainer extends Component{

    constructor(){
        super();

        this.state = {
            currentRepo: null,
            
    }
}


    render(){
        return(
            <div className='mainContainer box is-paddingless'>
                <Nav/>
                <Switch>
                    <Route path='/home' component={RepoView}/>
                </Switch>
                {routes}
            </div>
        )
    }
}

export default connect()(MainContainer);

