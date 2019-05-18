import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import Login from '../../../modals/Login/Login'



class Nav extends Component{

    

    render(){
        console.log(this.props)
        const nav = this.props.id === -1 ? <nav>
        <ul>
            <Link to='/auth/login'>login</Link>
            <Link to='/auth/register'>register</Link>

        </ul>
    </nav> :  <ul>
            <Link to='/home'>Home</Link>
            

        </ul>

        return(
            <div>
                {nav}
                
            </div>
    
        )
    }
}


const mapStateToProps = (reduxState) => {
    const {
        id,
        username,
        image_url
    } = reduxState;
    return{
        id,
        username,
        image_url
    }
}




export default connect(mapStateToProps )(Nav);


