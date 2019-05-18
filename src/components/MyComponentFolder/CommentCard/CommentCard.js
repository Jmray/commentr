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
        castVote
            } = props
        
        
            

        const vote = votes > 0 ? '+' + votes : votes < 0 ? votes : null;

            return(
               
                
                    <article className="media">
                        <figure className="media-left">
                            <p className="image is-64x64">
                            <img src={userImage}/>
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
                                <span className="icon is-small"><i className="fas fa-reply"></i></span>
                                </a>
                                <a className="level-item">
                                <span className="icon is-small" onClick={() => props.castVote(-1, commentId, repoId)}><i className="fas fa-angle-down"></i></span>
                                </a>
                                <a className="level-item">
                                <span className="icon is-small" onClick={() => props.castVote(1, commentId, commentId)} ><i className="fas fa-angle-up"></i></span>
                                </a>
                                <span>{vote}</span>
                                
                            </div>
                            </nav>
                        </div>
                        <div className="media-right">
                            <button className="delete"></button>
                        </div>
                    </article>
                    
        
            )
        
        
    
    

    
    
}
const mapStateToProps = (reduxState) => {
    const {
        currentRepo
    } = reduxState.repoReducer;
    return{
    
        currentRepo,
    }
}




export default connect(mapStateToProps)(CommentCard);