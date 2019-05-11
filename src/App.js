import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import { HashRouter } from 'react-router-dom';

import { MainContainer } from './components';
import { connect } from 'react-redux';
import { updateUser } from './actions/Actions'

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
    return (

        <HashRouter>
          {console.log("app.js", this.props)}
          <div className="App">
              <MainContainer/>
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
    imageUrl
} = reduxState;
return{
    username,
    email,
    id,
    imageUrl
}
}

export default connect(mapStateToProps, {  updateUser })(App)
