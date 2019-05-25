import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser} from '../../../actions/Actions'


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
            const {
                id, 
                username,
                email,
                image_url,
            } = res.data.user;


            
            this.props.updateUser(
                id,
                username,
                email,
                image_url,
            );
            
            //this.props.history.push(res.data.redirectUrl);
        }).then(() => {
            this.props.history.push('/home')
        }).catch( (err) => {
            if(err === "System Failure!"){
                this.setState({serverErrorAuth: true})
                
            }
            let errorToAlert = this.state.serverErrorAuth === false ? "username or email taken!" : err;

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




export default connect(mapStateToProps, {updateUser} )(AuthRegister);