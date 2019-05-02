import React, { Component } from 'react';
import axios from 'axios';
import { CommentCard } from '../../index';


export class CommentView extends Component{

    constructor(){
        super();

        this.state = {
            comments: [],
        }
        
    }
    componentDidMount(){
        axios.get('/api/comments/' + this.props.match.params.id).then( comments => {
            this.setState({
                comments: comments.data
            })
        })
    }
    

    render(){
        console.log(this.state.comments)
        const comments = this.state.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <CommentCard comment={comment}/>
                </div>
            )
        })
        return(
            <div>
                {comments}
            </div>
        )
    }
}