import React from 'react';
import './PostContainer.scss'
import Post from './Post'
import Comment from '../CommentSection/CommentSection'

const PostContainer = props => {
    return (
        <div className="container">
        <div className="row">
            <div className="col post-container">{props.data.map(post => {
                return <Post post={post} />
            })}
            </div>
            <div className="col comment-container">{props.data.map(post => {
            return <Comment post={post} />
            })}
            </div>
        </div>
        </div>

    );

}

export default PostContainer;