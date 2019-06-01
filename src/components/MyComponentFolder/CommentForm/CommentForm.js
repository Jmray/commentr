import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import '../../../sass/globalStyles.scss'


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
            currentRepo,
            
        } = this.props;
    
        axios.post('api/newcomment', {
            comment,
            replyId,
            userId: id,
            repoId: currentRepo.id,
            }).then(res => {
                this.props.setup();
                if(this.props.toggle){
                    this.props.toggle();
                }
            });

            this.setState({
                comment: '',
            })

    };
    handleCancel(){
        this.setState({
            comment: '',
        })
    }

    render(){

        return(
            <div className='box'>
                <article className="media">
                    <figure className="media-left">
                        <p className="image is-64x64 is-rounded">
                        <img className="image is-64x64 is-rounded" src={this.props.image_url} alt='profile'/>
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
                        <div className="level-right is-pulled-right">
                            <div className="level-item">
                            <div className="button " onClick={(event) => {this.handleContentSubmit(event, this.props.replyId)}}>Submit</div>
                            </div>
                        </div>
                        <div className="level-left">
                            <div className="level-item">
                            <div className="button " type='button' onClick={(event) => {this.handleCancel()}}>cancel</div>
                            </div>
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