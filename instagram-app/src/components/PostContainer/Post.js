import React from 'react';
import './PostContainer.scss'

const Post = props => {
    console.log('Post props', props);
    return (
        <div className="container">
        <div className="row">
            <div className="col post">
            <div>
                
                Username: <span>{props.post.username}</span>

            </div>
            </div>
        </div>
        </div>

    );

}

export default Post;