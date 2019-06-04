import React from 'react';
import './PostContainer.scss'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
    console.log('PostContainer props', props)
    return (
        <div className="container post-container">
        <div className="row post-row">
            <div className="col post-content">
                Username: <span>{props.post.username}</span>
            </div>
            <div className="col post-content">
                <img src={props.post.imageUrl} ref={props.username}></img>

            </div>
            <div className="col">
            {props.post.comments.map(comment => {
             return <CommentSection comment={comment} />
            })}

            </div>
        </div>
        </div>

    );
}

export default PostContainer; 