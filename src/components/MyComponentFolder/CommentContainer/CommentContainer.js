import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getComments} from '../../../_utils/';
import { CommentCard } from '../../index';
import '../../../sass/globalStyles.scss'


class CommentContainer extends Component{

    constructor(props){
        super(props);
        this.state ={
            replies: [],
            showReplies: false,
        }
    }
    componentDidMount(){
        
    }
    getReplies(replyId){
        getComments(this.props.currentRepo, replyId).then(response => {
            this.setState({
                replies: response.data,
                showReplies: true,
            })
        })
    }
    castVote(vote, commentId, userId){
        axios.post('/api/newvote', {vote, commentId, userId}).then( res => {
            
        }
            
        ).catch(err => {
            alert(err.response.data.message)
        })
    }
    
    
        
        render(){
            console.log(this.state)
            const { 
                comment,
                username,
                image_url,
                id,
                votes,
            } = this.props.comment;

            const replyButton = () =>{
                if(this.props.hasReplies){
                    if(!this.state.showReplies){
                        return (<div className='link is-small' onClick={() => this.getReplies(id)}> replies </div>)
                    }
                    else{
                        return(<div onClick={() => this.setState({showReplies: false})}>hide replies</div>)
                    }
                }
                else{
                    return null;
                }
            }
            
           


            return(
                <div>

                    <CommentCard
                    userImage={image_url}
                    commentContent={comment}
                    username={username}
                    repoId={this.props.currentRepo}
                    commentId={id}
                    castVote={(vote, commentId, userId) => this.castVote(vote, commentId, userId)}
                    votes={votes}
    
                    />
                    
                    <a>
                    <span>{replyButton()}</span>
                    </a>
                </div>

                
        
        
        
                
        
            )
        }
        
    
    

    
    
}
const mapStateToProps = (reduxState) => {
    const {
        currentRepo
    } = reduxState.repoReducer;
    return{
    
        currentRepo,
    }
}




export default connect(mapStateToProps)(CommentContainer);