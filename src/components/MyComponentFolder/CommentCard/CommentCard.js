import React from 'react';
import './CommentCard.css';


export function CommentCard(props){
    const { 
        comment,
        username,
        image_url,
        id,
        votes,
        reply_id, 
        } = props.comment;

    const replyButton = props.hasReplies ? 
        <button onClick={() => props.getReplies(id)}>
        replies
        </button> :
        null;
    const vote = votes > 0 ? '+' + votes : votes < 0 ? votes : null;
        
        
    
    

    
    return(
        <div className='commentCard'>
        <div className='comment-left'>
            <div className='comment-profile-pic'>
                <img src={image_url} alt='profile'/>
            </div>
        </div>
        <div className='comment-right'>

            <div className='comment-author-time'>
                <h4>{username}</h4>
            </div>
            <div className='comment-content'>
                <h3>{comment}</h3>
            </div>
            <div className='comment-right-bottom'>
                <div className='comment-votes'>
                    <button onClick={() => props.vote(1, id, 6, reply_id)}>
                        &#9650;
                    </button>
                
                    <button onClick={() => props.vote(-1, id, 6, reply_id)}>
                        &#9660;
                    </button>
                    {vote}
                </div>
            
                <div className='comment-replies'>
                    {replyButton}
                    
                </div>
            </div>

            
        </div>
       
        </div>
    )
}