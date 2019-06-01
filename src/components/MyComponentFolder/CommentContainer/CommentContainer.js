import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getComments} from '../../../_utils/';
import { CommentCard, CommentForm, EditCommentModal } from '../../index';
import '../../../sass/globalStyles.scss'
  

class CommentContainer extends Component{

    constructor(props){
        super(props);
        this.state ={
            allReplies: [],
            replies: [],
            showReplies: false,
            showReplyForm: false,
            isOwn: false,
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
            console.log("commentContainer", this.props)
            const { 
                username,
                id: comment_id,
            } = this.props.comment;


            
            const replyButton = () =>{
                if(this.props.hasReplies){
                    const amountReplies = this.state.replies.length != 0 ? this.state.replies.length : null;
                    if(!this.state.showReplies){
                        return (<div className='link is-small' onClick={() => this.getReplies(comment_id)}>{amountReplies} replies </div>)
                    }
                    else{
                        return(<div className='link' onClick={() => this.setState({showReplies: false})}>hide replies</div>)
                    }
                }
                else{
                    return null;
                }
            }
            const replyForm = () => {
                if(this.state.showReplyForm){
                    return <CommentForm replyId={comment_id}/>
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
                                username={username}
                                castVote={(vote, commentId, userId) => this.castVote(vote, commentId, userId)}
                                deleteComment={(commentId) => this.deleteComment(commentId)}
                                comment={reply}
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
                    <div className='left-side'>
                        <CommentCard
                        comment={this.props.comment}
                        castVote={(vote, commentId, userId) => this.castVote(vote, commentId, userId)}
                        replies={replies()}
                        replyForm={replyForm()}
                        toggleReplyForm={() => {this.toggleReplyForm()}}
                        deleteComment={(commentId) => this.deleteComment(commentId)}
        
                        />

                    </div>

                    
                    {/* <div>
                        {replies()}
                        
                    </div> */}
                    <div className='footer is-paddingless'>

                        <div className='link' >
                        <span>{replyButton()}</span>
                        </div>
                    </div>
                </div>

                
        
        
        
                
        
            )
        }
        
    
    

    
    
}
const mapStateToProps = (reduxState) => {
    const {
        id: user_id,
    } = reduxState.userReducer;
    const {
        currentRepo,
    } = reduxState.repoReducer;
    return{
    
        user_id,
        currentRepo,
    }
}




export default connect(mapStateToProps)(CommentContainer);