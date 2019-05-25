import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getComments} from '../../../_utils/';
import { CommentCard, CommentForm } from '../../index';
import '../../../sass/globalStyles.scss'
  

class CommentContainer extends Component{

    constructor(props){
        super(props);
        this.state ={
            allReplies: [],
            replies: [],
            showReplies: false,
            showReplyForm: false,
        }
    }
    getReplies(replyId){
        getComments(this.props.currentRepo, replyId).then(response => {
            this.setState({
                replies: response.data,
                showReplies: true,
            })
        })
    }
    deleteComment(commentId){
        axios.delete('/api/deletecomment/' + commentId);
    }
    castVote(vote, commentId, userId){
        axios.post('/api/newvote', {vote, commentId, userId}).then( res => {
            
            
        }
            
        ).catch(err => {
            alert(err.response.data.message)
        })
    }
    toggleReplyForm(){
        if(this.state.showReplyForm){
            this.setState({
                showReplyForm: false,
            });
        }else{
        this.setState({
            showReplyForm: true
        })
        }
    }
    
    
        
        render(){
            const { 
                comment,
                username,
                image_url,
                id,
                votes,
                reply_id,
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
            const replyForm = () => {
                if(this.state.showReplyForm){
                    return <CommentForm replyId={id}/>
                }else{
                    return null;
                }
            }
            const replies = () => {
                if(this.state.showReplies){
                    const result = this.state.replies.map(reply => {
                        return(
                            

                                <CommentCard
                                
                                
                                key={reply.id}
                                userImage={reply.image_url}
                                commentContent={reply.comment}
                                username={username}
                                repoId={this.props.currentRepo}
                                commentId={reply.id}
                                castVote={(vote, commentId, userId) => this.castVote(vote, commentId, userId)}
                                votes={reply.votes}
                                replyId={reply.reply_id}
                                deleteComment={(commentId) => this.deleteComment(commentId)}
                                />
                            
                        )

                        
                    });
                    return result;
                }else{
                    return null;
                }
            }
            
           


            return(
                <div >

                    <CommentCard
                    userImage={image_url}
                    commentContent={comment}
                    username={username}
                    repoId={this.props.currentRepo}
                    commentId={id}
                    castVote={(vote, commentId, userId) => this.castVote(vote, commentId, userId)}
                    votes={votes}
                    replies={replies()}
                    replyId={reply_id}
                    replyForm={replyForm()}
                    toggleReplyForm={() => {this.toggleReplyForm()}}
                    deleteComment={(commentId) => this.deleteComment(commentId)}
    
                    />
                    
                    <div className='link' >
                    <span>{replyButton()}</span>
                    </div>
                    {/* <div>
                        {replies()}

                    </div> */}
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