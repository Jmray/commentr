import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { RepoCard } from '../../index'



class RepoView extends Component{


    constructor(){
        super();
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
        const repos = this.state.repos ?  this.state.repos.map( repo => {
            return(
            <div key={repo.id}>
               <RepoCard  repo={repo}/>
            </div>)
        }) : null;

        return(
            <div>
                {repos ? repos : null}
                Repoview
            </div>
        )
    }
}



const mapStateToProps = (reduxState) => {
    const {
        id,
    } = reduxState;
    return{
        id,
    }
}




export default connect(mapStateToProps)(RepoView);
