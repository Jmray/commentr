import React, { Component } from 'react';
import './css/globalStyles.css';
import axios from 'axios';

import { HashRouter, Route } from 'react-router-dom';

import { MainContainer } from './components';
import { connect } from 'react-redux';
import { updateUser } from './actions/Actions';


class App extends Component {


  componentDidMount(){
    axios.get('/auth/userassign').then(response => {
        const {
          email,
          id,
          username,
          image_url,
        } = response.data;
        
        this.props.updateUser(
          id,
          username,
          email,
          image_url,
        )
    })
    
  }
  render() {
    const mainContainer = this.props.username ? <MainContainer/> : <div>loading</div>
    return (

        <HashRouter>
          {console.log("app.js", this.props)}

          <div className="App ">
            {mainContainer}
             
          </div>
        </HashRouter>
    );
  }
}
const mapStateToProps = (reduxState) => {
  const {
    username,
    email,
    id,
    image_url
} = reduxState.userReducer;
return{
    username,
    email,
    id,
    image_url
}
}

export default connect(mapStateToProps, {  updateUser })(App)
