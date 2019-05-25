import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getComments} from '../../../_utils/';
import './CommentCard.css';
import '../../../sass/globalStyles.scss'


function CommentCard(props){

    
    
    const{
        userImage,
        commentContent,
        username,
        repoId,
        commentId,
        votes,
        castVote,
        replies,
        replyForm,
        toggleReplyForm,
        replyId,
        deleteComment,
        userId
            } = props;
    const imageSize = replyId != 0 ? 'image is-48x48' : 'image is-64x64';
    
        
        
            
        const vote =     votes > 0 ? '+' + votes : votes < 0 ? votes : null;
        const replyCommentButton = replyId == 0 ? <span className="icon is-small" onClick={() => toggleReplyForm()}><i className="fas fa-reply"></i></span> : null;

            return(
               
                
                    <article className="media">
                        <figure className="media-left">
                            <p className={imageSize}>
                            <img className={imageSize +' is-rounded'} src={userImage}/>
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="content">
                            <p>
                                <strong>{username}</strong> 
                                {/* <small>31m</small> */}
                                <br/>
                                    {commentContent}
                            </p>
                            </div>
                            <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item">
                                    {replyCommentButton}
                                </a>
                                <a className="level-item">
                                <span className="icon is-small" onClick={() => castVote(-1, commentId, userId)}><i className="fas fa-angle-down"></i></span>
                                </a>
                                <a className="level-item">
                                <span className="icon is-small" onClick={() => castVote(1, commentId, userId)} ><i className="fas fa-angle-up"></i></span>
                                </a>
                                <span>{vote}</span>
                                
                            </div>
                            </nav>
                        <div>
                            {replyForm}
                        </div>
                        <div>
                            {replies}
                        </div>
                        </div>
                        <div className="media-right">
                            <button onClick={() => deleteComment(commentId)} className="delete"></button>
                        </div>
                    </article>
                    
        
            )
        
        
    
    

    
    
}
const mapStateToProps = (reduxState) => {
    const {
        currentRepo
    } = reduxState.repoReducer;
    const {
        id

    } = reduxState.userReducer;
    return{
    
        currentRepo,
        userId: id
    }
}




export default connect(mapStateToProps)(CommentCard);