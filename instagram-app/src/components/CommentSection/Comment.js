import React from 'react';

const Comment = props => {
    console.log('Comment props', props)
    return(
        <div className="comment">
        Username: {props.comment.username}<span> Comment: {props.comment.text}</span></div>
    );

}

export default Comment;