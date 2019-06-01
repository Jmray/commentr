import React, { Component } from 'react';
import './css/globalStyles.css';
import axios from 'axios';

import { HashRouter} from 'react-router-dom';

import { MainContainer } from './components';
import { connect } from 'react-redux';
import { updateUser } from './actions/Actions';


class App extends Component {


  componentDidMount(){
    axios.get('/auth/userassign').then(response => {
        const {
          id,
          username,
          email,
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
    console.log(this.props)
    const mainContainer = this.props.username ? <MainContainer/> : <div>loadingApp</div>
    return (

        <HashRouter>

          <div className="App has-background-grey-dark ">
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
