import React, { Component } from 'react';
import { Nav} from '../../index';
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
                <Nav/>
                {routes}
            </div>
        )
    }
}

