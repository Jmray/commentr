import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { RepoCard, CreateRepoModal } from '../../index'



class RepoView extends Component{


    constructor(props){
        super(props);
        if(props.id === -1){
            props.history.push('/auth/login')
        }
        this.state = {
            repos: [],
        }
        
    }

    componentDidMount(){
        
        axios.get('/api/repos').then(response => {
            const repos = response.data;
            

            this.setState({
                repos,
            })
        }).catch(err => {
            console.log(err.response);
        })
    }




    render(){
        console.log(this.state.repos)
        const repos = this.state.repos ?  this.state.repos.map( repo => {
            return(

            <div className='column is-one-fifth' key={repo.id}>
               <RepoCard repo={repo}/>
            </div>)
        }) : null;

        return(
            <div>
                <CreateRepoModal/>

                <div className=' content '>
                    <h1>My Repos</h1>
                </div>
                <hr className=' is-black'></hr>
                <div className='columns is-multiline '>
                    {repos ? repos : null}
                    
                </div>
            </div>
        );
    };
}



const mapStateToProps = (reduxState) => {
    const {
        id,
    } = reduxState.userReducer;
    return{
        id,
    }
}




export default connect(mapStateToProps)(RepoView);
