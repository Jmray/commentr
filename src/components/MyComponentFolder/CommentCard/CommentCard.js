import React from 'react';
import './CommentCard.css';
import '../../../sass/globalStyles.scss'


export function CommentCard(props){
    const { 
        comment,
        username,
        image_url,
        id,
        votes,
        reply_id,
        comment_repo_id, 
        } = props.comment;

    const replyButton = props.hasReplies ? 
        <div className='link is-small' onClick={() => props.getReplies(id)}>
        replies
        </div> :
        null;
    const vote = votes > 0 ? '+' + votes : votes < 0 ? votes : null;
        
        
    
    

    
    return(
        // <div className='commentCard'>
        // <div className='comment-left'>
        //     <div className='comment-profile-pic'>
        //         <img src={image_url} alt='profile'/>
        //     </div>
        // </div>
        // <div className='comment-right'>

        //     <div className='comment-author-time'>
        //         <h4>{username}</h4>
        //     </div>
        //     <div className='comment-content'>
        //         <h3>{comment}</h3>
        //     </div>
        //     <div className='comment-right-bottom'>
        //         <div className='comment-votes'>
        //             <button onClick={() => props.vote(1, id, 6, reply_id)}>
        //                 &#9650;
        //             </button>
                
        //             <button onClick={() => props.vote(-1, id, 6, reply_id)}>
        //                 &#9660;
        //             </button>
        //             {vote}
        //         </div>
            
        //         <div className='comment-replies'>
        //             {replyButton}
                    
        //         </div>
        //     </div>

            
        // </div>
       
        // </div>
        <article className="media">
            <figure className="media-left">
                <p className="image is-64x64">
                <img src={image_url}/>
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                <p>
                    <strong>{username}</strong> <small>31m</small>
                    <br/>
                        {comment}
                </p>
                </div>
                <nav className="level is-mobile">
                <div className="level-left">
                    <a className="level-item">
                    <span className="icon is-small"><i className="fas fa-reply"></i></span>
                    </a>
                    <a className="level-item">
                    <span className="icon is-small" onClick={() => props.vote(-1, id, comment_repo_id, reply_id)}><i className="fas fa-angle-down"></i></span>
                    </a>
                    <a className="level-item">
                    <span className="icon is-small" onClick={() => props.vote(1, id, comment_repo_id, reply_id)} ><i className="fas fa-angle-up"></i></span>
                    </a>
                    <span>{vote}</span>
                    <a className="level-item" >
                    <span>{replyButton}</span>
                    </a>
                </div>
                </nav>
            </div>
            <div className="media-right">
                <button className="delete"></button>
            </div>
        </article>

    )
}