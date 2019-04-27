import React, { Component } from 'react';
import axios from 'axios';


export class AuthRegister extends Component{
    

    constructor(){
        super();

        this.state = {
            email: '',
            username: '',
            password: '',
        };
    }
    handleInputChange(value, toChange){

        this.setState({[toChange]: value});
    }

    register(event){
        event.preventDefault();

        axios.post('/auth/register', this.state).then((res) => {
            this.props.history.push(res.data.redirectUrl)
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={event => {this.register(event)}}>


                    <label>
                        Email
                        <input type='text' onChange={event => {this.handleInputChange(event.target.value, "email")}}/>
                    </label>

                    <label>
                        Username
                        <input type='text' onChange={event => {this.handleInputChange(event.target.value, "username")}}/>
                    </label>

                    <label>
                        Password
                        <input type='Password' onChange={event => {this.handleInputChange(event.target.value, "password")}}/>
                    </label>

                    <button type='submit'>
                        register
                    </button>
                </form>
            </div>
        );
    };
}

