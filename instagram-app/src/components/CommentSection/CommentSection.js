import React from 'react';
import './CommentSection.scss';
import Comment from './Comment'

const CommentSection = props => {
    return (
        <div className="comment-section">
        {props.comments.map(comment => {
               return <Comment comment={comment} key={comment.id} /> })}
        </div>
    )
}

export default CommentSection;


{/* <div className="form">
<form onSubmit={this.addComment} className = 'comment-form'>
<input
    placeholder="prettyyyy... pretty good"
    onChange={this.handleChanges}
    value={this.state.addComment}
    name="comment"
    />
<button className="btn">Add Comment</button>
</form>
</div> */}