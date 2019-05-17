import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../../actions/Actions'
import './AuthLogin.scss';



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
                // <div id="login">
                // <div class="login-card">

                //     <div class="card-title">
                //     <h1>Please Sign In</h1>
                //     </div>

                //     <div class="content">
                //     <form method="POST" action="#">

                //         <input id="email" type="email" name="email" title="email" placeholder="Email" required autofocus/>
                //         <input id="password" type="password" name="password" title="password" placeholder="Password" required/>

                //         <div class="level options">
                //         <div class="checkbox level-left">
                //             <input type="checkbox" id="checkbox" class="regular-checkbox"/>
                //             <label for="checkbox"></label>
                //             <span>Remember me</span>
                //         </div>

                //         <a class="btn btn-link level-right" href="#">Forgot Password?</a>
                //         </div>

                //         <button type="submit" class="btn btn-primary">Login</button>
                //     </form>
                //     </div>
                // </div>
                // </div>
            //     <section class="hero   is-fullheight">
            //     <div class="hero-body">
            //         <div class="container has-text-centered">
            //             <div class="column is-4 is-offset-4">
            //                 <h3 class="title has-text-grey">Login</h3>
            //                 <p class="subtitle has-text-grey">Please login to proceed.</p>
            //                 <div class="box">
            //                     <figure class="avatar">
            //                         <img src="https://placehold.it/128x128"/>
            //                     </figure>
            //                     <form>
            //                         <div class="field">
            //                             <div class="control">
            //                                 <input class="input is-large" type="email" placeholder="Your Email" autofocus=""/>
            //                             </div>
            //                         </div>
        
            //                         <div class="field">
            //                             <div class="control">
            //                                 <input class="input is-large" type="password" placeholder="Your Password"/>
            //                             </div>
            //                         </div>
            //                         <div class="field">
            //                             <label class="checkbox">
            //               <input type="checkbox"/>
            //               Remember me
            //             </label>
            //                         </div>
            //                         <button class="button is-block is-info is-large is-fullwidth">Login</button>
            //                     </form>
            //                 </div>
            //                 <p class="has-text-grey">
            //                     <a href="../">Sign Up</a> &nbsp;·&nbsp;
            //                     <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            //                     <a href="../">Need Help?</a>
            //                 </p>
            //             </div>
            //         </div>
            //     </div>
            // </section>
                
            
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

