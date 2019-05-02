import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUsername, updateEmail, updateId } from '../../../actions/Actions'


class AuthRegister extends Component{
    

    constructor(){
        super();

        this.state = {
            email: '',
            username: '',
            password: '',
            serverErrorAuth: false,

        };
    }
    handleInputChange(value, toChange){

        this.setState({[toChange]: value});
    }

    register(event){
        event.preventDefault();

        axios.post('/auth/register', this.state).then((res) => {
            this.props.updateUsername(res.data.user.username);
            this.props.updateEmail(res.data.user.email);
            this.props.updateId(res.data.user.id);
            this.props.history.push(res.data.redirectUrl);
        }).catch( (err) => {
            if(err === "System Failure!"){
                this.setState({serverErrorAuth: true})
                
            }
            let errorToAlert = this.state.serverErrorAuth === false ? "Username or password incorrect!" : err;

            alert(errorToAlert);
        });
    }

    render(){
        console.log(this.props)
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




export default connect(mapStateToProps, {updateEmail, updateUsername, updateId} )(AuthRegister);