import React from 'react';

const Comment = props => {
    console.log('Comment props', props)
    return(
        <div className="comment"> 
            <span className="comment-username">
                {props.comment.username}
            </span>
            
            <span>
                {props.comment.text}
            </span>
        </div>
    );

}

export default Comment;