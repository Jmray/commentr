import React, { Component } from 'react';
import axios from 'axios';
import { CommentCard } from '../../index';


export class CommentView extends Component{

    constructor(){
        super();

        this.state = {
            comments: [],
            currentRepo: null,
            
        }
        
    }
    componentDidMount(){
        this.getComments()
    }
    getComments(){
        axios.get('/api/comments/' + this.props.match.params.id).then( comments => {
            this.setState({
                comments: comments.data,
                currentRepo: this.props.match.params.id,
            })
        })
    }

    checkReplies(replyId){
        console.log(replyId)
        axios.get(`/api/comments/replies/${this.state.currentRepo}/${replyId}`).then(comments => {
            
            this.setState({
                comments: comments.data,
            })
        })
    }

    hasReplies(commentId){
         return(this.state.comments.filter( comment => {
           return comment.reply_id === commentId;
        }).length !== 0
        )
        

    }
    vote(vote, commentId, userId){
        axios.post('/api/newvote', {vote, commentId, userId}).then( res => {
            this.getComments();
        }
            
        )
    }
    postComment(comment, replyId, userId, repoId ){
        axios.post('/api/newcomment', {comment, replyId, userId, repoId}).then()

    };

    render(){
        const comments = this.state.comments.map(comment => {
            
            return (
                <div key={comment.id}>
                    <CommentCard 
                        comment={comment} 
                        hasReplies={this.hasReplies(comment.id)} 
                        checkReplies={(replyId) => this.checkReplies(replyId)}
                        vote={(vote, commentId, userId) => {this.vote(vote, commentId, userId)}}/>
                </div>
            )
        })
        return(
            <div>
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