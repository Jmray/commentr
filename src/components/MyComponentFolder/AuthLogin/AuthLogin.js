import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../../actions/Actions'



class AuthLogin extends Component{
    

    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            serverErrorAuth: false,
        };
    }
    handleInputChange(value, toChange){
        this.setState({[toChange]: value});
    }

    login(event){
        event.preventDefault();

        

        axios.post('/auth/login', this.state).then((res) => {
            const {
                username,
                email,
                id,
                image_url
            } = res.data.user;
            
            this.props.updateUser(
                id,
                username,
                email,
                image_url
                );
            
        }).then(() => {
            this.props.history.push('/home')
            
        })
        .catch( (err) => {
            console.log('hit', err)
            if(err === "System Failure!"){
                this.setState({serverErrorAuth: true})
                
            }
            let errorToAlert = this.state.serverErrorAuth === false ? "Username or password incorrect!" : err;

            alert(errorToAlert);
        });
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

                    <button type='submit'>
                        Login
                    </button>
                </form>
            </div>
        );
    };
}

const mapStateToProps = (reduxState) => {
    const {
        username,
        email,
        id,
    } = reduxState;
    return{
        username,
        email,
        id,
    }
}




export default connect(mapStateToProps, {updateUser} )(AuthLogin);

