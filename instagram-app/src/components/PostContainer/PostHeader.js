import React from 'react';

const PostHeader = props => {

    return(
        <div className="post-header">
            <img className="thumbnail" src={props.profileThumbnail} alt="profile pic" />
            <div className="username">{props.username}</div>
        </div>
    )
}

export default PostHeader;