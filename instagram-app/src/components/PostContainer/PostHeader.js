import React from 'react';

const PostHeader = props => {

    return(
        <div className="post-header">
            <img src={props.profileThumbnail} alt="profile pic" />
            <div>{props.username}</div>
        </div>
    )
}

export default PostHeader;