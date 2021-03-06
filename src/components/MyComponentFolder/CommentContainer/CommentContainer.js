import React, { Component } from 'react';
import axios from 'axios';
import { updateComments, updateReplies, updateRepo} from '../../../actions/Actions';
import {connect} from 'react-redux';
import {getComments} from '../../../_utils/';
import { CommentCard, CommentForm, EditCommentModal } from '../../index';
import '../../../sass/globalStyles.scss'
  

class CommentContainer extends Component{

    constructor(props){
        super(props);
        this.state ={
            replies: [],
            showReplies: false,
            showReplyForm: false,
            isOwn: false,
            isFocused: false,
        }
    }
    
    
    
    getReplies(replyId){
        console.log(this.props, replyId)
        getComments(this.props.currentRepo.id, replyId).then(response => {
            this.setState({
                replies: response.data,
                showReplies: true,
            })
        })
    }
    deleteComment(commentId){
        axios.delete('/api/deletecomment/' + commentId);
        this.props.setup();
    }
    castVote(vote, commentId, userId){
        axios.post('/api/newvote', {vote, commentId, userId}).then( res => {
            this.props.setup();
            
            
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
                username,
                id: comment_id,
            } = this.props.comment;


            
            const replyButton = () =>{
                if(this.props.hasReplies){
                    const amountReplies = this.state.replies.length != 0 ? this.state.replies.length : null;
                    if(!this.state.showReplies){
                        return (<div className='replies column' onClick={() => this.getReplies(comment_id)}><p className='link replies'>{amountReplies} replies </p></div>)
                    }
                    else{
                        return(<div className='replies column' onClick={() => this.setState({showReplies: false})}><p className='link replies'>hide replies</p></div>)
                    }
                }
                else{
                    return null;
                }
            }
            const replyForm = () => {
                if(this.state.showReplyForm){
                    return <CommentForm setup={() => this.props.setup()} toggle={() => this.toggleReplyForm()} replyId={comment_id}/>
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
                                setComments={() => this.props.setComments()}
                                />
                            
                        )

                        
                    });
                    return result;
                }else{
                    return null;
                }
            }
            
           


            return(
                <div className='commentContainer' >
                    <div className='left-side'>
                        <CommentCard
                        comment={this.props.comment}
                        castVote={(vote, commentId, userId) => this.castVote(vote, commentId, userId)}
                        replies={replies()}
                        replyForm={replyForm()}
                        toggleReplyForm={() => {this.toggleReplyForm()}}
                        deleteComment={(commentId) => this.deleteComment(commentId)}
                        setup={() => this.props.setup()}
        
                        />

                    </div>

                    
                    {/* <div>
                        {replies()}
                        
                    </div> */}
                    

                        <div className='replies columns' >
                        <span>{replyButton()}</span>
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
        replies,
        comments,
    } = reduxState.repoReducer;
    return{
    
        user_id,
        currentRepo,
        replies,
        comments,
    }
}




export default connect(mapStateToProps)(CommentContainer);