import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { CommentCard } from '../../index';



class CommentView extends Component{

    constructor(props){
        super(props);

        this.state = {
            comments: [],
            replies: [],
            currentRepo: props.match.params.id,
            isReplyView: false,
            
        }
        
    }
    componentDidMount(){
        this.getComments();
        this.getAllReplies();
        
    }
    getComments(replyId = 0){
        const repoId = this.state.currentRepo;

        if(replyId) {
            axios.get(`/api/comments/${repoId}/${replyId}`).then( comments => {

                this.setState({
                    isReplyView: true,
                    comments: comments.data 
                })
            }
            ).catch(err => {
                console.log(err);
            });
        }else{
            axios.get(`/api/comments/${repoId}/${replyId}`).then(comments => {
                this.setState({
                    isReplyView: false,
                    comments: comments.data
                })
            }).catch(err => {
                console.log(err);
            });
        }
        
    }
    getAllReplies(){
        axios.get(`/api/replies/${this.state.currentRepo}`).then(replies => {
            this.setState({
                replies: replies.data
            })
        })
    }

    

    hasReplies(commentId){
         return(this.state.replies.filter( comment => {
           return comment.reply_id === commentId;
        }).length !== 0
        )
        

    }
    vote(vote, commentId, userId, replyId){
        axios.post('/api/newvote', {vote, commentId, userId}).then( res => {
            
            this.getComments(replyId);
        }
            
        ).catch(err => {
            alert(err.response.data.message)
        })
    }
    postComment(comment, replyId, userId, repoId ){
        axios.post('/api/newcomment', {comment, replyId, userId, repoId}).then()

    };

    render(){
        const backButton = this.state.isReplyView ? 
        <button onClick={() => this.getComments()}> back </button> : null;


        const comments = this.state.comments.map(comment => {
            
            return (
                <div key={comment.id}>
                {console.log(comment)}
                    <CommentCard 
                        comment={comment} 
                        hasReplies={this.hasReplies(comment.id)} 
                        getReplies={(replyId) => this.getComments(replyId)}
                        vote={(vote, commentId, userId, replyId) => {this.vote(vote, commentId, userId, replyId)}}/>
                </div>
            )
        })
        return(
            <div>

                {backButton}
                <div className='comment-post'>
                    
                    {/* <form onSubmit={}>
                        <input type='text'/>
                    </form> */}
                </div>
                {comments}
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
    const {
        username,
        email,
        id,
    } = reduxState;
    return{
        username,
        email,
        id,
    }
}


export default connect(mapStateToProps)(CommentView);