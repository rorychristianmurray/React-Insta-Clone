import React from 'react';

const Comment = props => {
    console.log('Comment props', props)
    return(
        <div className="comment">
        {props.comment.username}<span>{props.comment.text}</span></div>
    );

}

export default Comment;