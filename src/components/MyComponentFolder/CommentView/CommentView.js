import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { CommentContainer, CommentForm } from '../../index';
import { updateRepo } from '../../../actions/Actions';
import { getComments, conditionalRender } from '../../../_utils';



class CommentView extends Component{

    constructor(props){
        super(props);
        props.updateRepo(props.match.params.id);

        this.state = {
            comments: [],
            replies: [1],
            
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
        



        const comments = this.state.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <CommentContainer
                        comment={comment} 
                        hasReplies={this.hasReplies(comment.id)} 
                        />
                </div>
            )
        });

        
        return(
            <div className='box'>
                <CommentForm/>
                {conditionalRender(comments, 'loading', this.state.replies[0] != 1)}
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
    const {
    } = reduxState.userReducer;
    const {currentRepo} = reduxState.repoReducer;
    return{
    }
}


export default connect(mapStateToProps, { updateRepo })(CommentView);