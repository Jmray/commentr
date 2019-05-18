import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { CommentContainer, CommentForm } from '../../index';
import { updateRepo } from '../../../actions/Actions';
import { getComments } from '../../../_utils';



class CommentView extends Component{

    constructor(props){
        super(props);
        props.updateRepo(props.match.params.id);

        this.state = {
            comments: [],
            replies: [1],
            isReplyView: false,
            
        }
        
    }
    componentDidMount(){
        this.setComments();
        this.getAllReplies();
        
    }
    setComments(){
        console.log(this.props)
        getComments(this.props.match.params.id).then(response => {
            this.setState({
                comments: response.data,
            })
        })
    }
    getReplies(replyId){
       this.getComments(replyId).then(response => {
            return response
       })
    }
    getAllReplies(){
        axios.get(`/api/replies/${this.props.match.params.id}`).then(replies => {
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
    
   

    render(){
        console.log(this.state)
        
        const backButton = this.state.isReplyView ? <button onClick={() => this.getComments()}> back </button> : null;

        const commentForm = !this.state.isReplyView ? <CommentForm/> : null;


        const comments = this.state.replies[0] != 1 ? this.state.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <CommentContainer
                        comment={comment} 
                        hasReplies={this.hasReplies(comment.id)} 
                        vote={(vote, commentId, userId, replyId) => {this.vote(vote, commentId, userId, replyId)}}/>
                </div>
            )
        }) : <div>loading</div>
        return(
            <div>
                {commentForm}
                {backButton}
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
        image_url,
    } = reduxState.userReducer;
    const {currentRepo} = reduxState.repoReducer;
    return{
        username,
        email,
        id,
        image_url,
        currentRepo,
    }
}


export default connect(mapStateToProps, { updateRepo })(CommentView);