import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class CommentForm extends Component{

    constructor(){
        super();

        this.state = {
            comment: '',
            isFocused: false,
            
        }
    }

    handleContentChange(value){
        this.setState({
            comment: value,
        });
    }

    handleContentSubmit(event, replyId = 0){
        event.preventDefault();

        const {
            comment
        } = this.state;
        const {
            id,
            currentRepo
        } = this.props;
    
        axios.post('api/newcomment', {
            comment,
            replyId,
            userId: id,
            repoId: currentRepo,
            }).then(res => alert(res.data));

            this.setState({
                comment: '',
            })

    };

    render(){

        return(
            <div>
                <article className="media">
                    <figure className="media-left">
                        <p className="image is-64x64">
                        <img src={this.props.image_url}/>
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="field">
                        <p className="control">
                            <textarea 
                                className="textarea" 
                                placeholder="Add a comment..."
                                value={this.state.comment} 
                                onChange={(event) => {this.handleContentChange(event.target.value)}}></textarea>
                        </p>
                        </div>
                        <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                            <a className="button is-info" onClick={(event) => {this.handleContentSubmit(event, this.props.replyId)}}>Submit</a>
                            </div>
                        </div>
                        <div className="level-right">
                        </div>
                        </nav>
                    </div>
                </article>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {
        id,
        image_url,
        username,
    } = reduxState.userReducer;
    const {
        currentRepo,
    } = reduxState.repoReducer;
    return{
        id,
        image_url,
        username,
        currentRepo,
    }
}




export default connect(mapStateToProps)(CommentForm);