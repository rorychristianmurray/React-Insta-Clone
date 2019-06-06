import React, { Component } from 'react';
import Post from './Post'

class PostContainer extends Component {
    render() {
        return (
            <>
                {this.props.posts.map(post =>
                    <Post post={post} />
                )}
            </>
        );
    }
}

export default PostContainer;