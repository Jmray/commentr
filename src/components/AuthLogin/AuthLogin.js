import React, { Component } from 'react';
import axios from 'axios';

export class AuthLogin extends Component{
    

    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
        };
    }
    handleInputChange(value, toChange){
        this.setState({[toChange]: value});
    }

    login(event){
        event.preventDefault();


    }

    render(){
        return(
            <div>
                <form onSubmit={event => {this.login(event)}}>
                    <label>
                        Email or Username
                        <input type='text' onChange={event => {this.handleInputChange(event.target.value, "username")}}/>
                    </label>

                    <label>
                        Password
                        <input type='Password' onChange={event => {this.handleInputChange(event.target.value, "password")}}/>
                    </label>
                </form>
            </div>
        );
    };
}

