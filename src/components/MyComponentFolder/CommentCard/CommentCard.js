import React from 'react';
import {connect} from 'react-redux';
import { EditCommentModal } from '../../index'
import './CommentCard.css';
import '../../../sass/globalStyles.scss'


function CommentCard(props){

    
    
    const{
        replies,
        replyForm,
        toggleReplyForm,
        replyId,
        deleteComment,
        userId,
        castVote,
            } = props;

    const {
        comment: comment_content,
        id: comment_id,
        image_url : comment_poster_image,
        isOwn,
        username: comment_poster_username,
        votes,
        reply_id
        } = props.comment;

    const imageSize = replyId !== 0 ? 'image is-48x48' : 'image is-64x64';
            
    const options = isOwn ? <div className="media-right level">
                                <i onClick={() => deleteComment(comment_id)} className='far fa-trash-alt level-item'></i>
                                <EditCommentModal comment_id={comment_id} setup={() => props.setup()} className='level-item'/>
                            </div> : null;
    
        
        
            
        let vote =     votes > 0 ? '+' + votes : votes < 0 ? votes : null;
        const replyCommentButton = reply_id === 0 ? <span className="icon is-small" onClick={() => toggleReplyForm()}><i className=" is-bordered  fas fa-reply"></i></span> : null;

            return(
               
                
                    <article className="media">
                        <figure className="media-left">
                            <p className={imageSize}>
                            <img className={imageSize +' is-rounded'} src={comment_poster_image} alt='profile'/>
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="content">
                            <p>
                                <strong>{comment_poster_username}</strong> 
                                <br/>
                                    {comment_content}
                            </p>
                            </div>
                            <nav className="level is-mobile is-marginless">
                            <div className="level-left">
                                <div className="level-item">
                                    {replyCommentButton}
                                </div>
                                <div className="level-item">
                                <span className="icon is-small" onClick={() => {
                                    castVote(-1, comment_id, userId);
                                    }}><i className="fas fa-angle-down"></i></span>
                                </div>
                                <div className="level-item">
                                <span className="icon is-small" onClick={() => castVote(1, comment_id, userId)} ><i className="fas fa-angle-up"></i></span>
                                </div>
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
                        {options}
                    </article>
                    
        
            )
        
        
    
    

    
    
}
const mapStateToProps = (reduxState) => {
    const {
        id

    } = reduxState.userReducer;
    const {
        currentRepo,
    } = reduxState.repoReducer;
    return{
        currentRepo,
        userId: id
    }
}




export default connect(mapStateToProps)(CommentCard);