import React, { Component } from 'react';
import Post from './Post'

class PostContainer extends Component {
    render() {
        return (
            <div>
                {this.props.posts.map(post =>
                    <Post post={post} />
                )}
            </div>
        );
    }
}

export default PostContainer;