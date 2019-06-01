import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {updateUser } from '../../../actions/Actions';
//import Login from '../../../modals/Login/Login'



class Nav extends Component{

    

    render(){
        const rightSideNav = this.props.id === -1 ? 
        <div className="buttons">
            <Link to='/auth/register' className="button is-primary">
                <strong>register</strong>
            </Link>
            <Link to='/auth/login' className="button is-light">
                <strong>login</strong>
            </Link>
        </div>
      : <div className='columns'>
          <div className='image is-32x32 is-rounded'>

            <img className='image is-32x32 is-rounded' style={{"minHeight": "32px"}} src={this.props.image_url} alt='profile'/>
          </div>
          {/* <p className='content'>{this.props.username}</p> */}
          <Link  onClick={() => axios.get('/auth/logout').then(() => axios.get('/auth/userassign').then(response => {
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
            }))}to='/auth/login' className="button is-text">

                <strong className='link'>logout</strong>
            </Link>
        </div>
        console.log(this.props);
        return(
          
            // <div>
            //     {nav}
                
            // </div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
      <h1 className=' navbar-item is-bold'>
          COMMENTR
      </h1>
    

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div  className="navbar-menu">
    <div className="navbar-start">
      <Link to='/home' className="navbar-item">
        Home
      </Link>

      {/* <div className="navbar-item">
        Place Holder
      </div>
      <div className="navbar-item">
        Place Holder
      </div>
      <div className="navbar-item">
        Place Holder
      </div> */}

      {/* <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div> */}
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        {rightSideNav}
      </div>
    </div>
  </div>
</nav>
            
    
        )
    }
}


const mapStateToProps = (reduxState) => {
    const {
        id,
        username,
        image_url
    } = reduxState.userReducer;
    return{
        id,
        username,
        image_url
    }
}




export default connect(mapStateToProps, {updateUser} )(Nav);


