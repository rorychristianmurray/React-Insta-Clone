import React from 'react';

const PostImage = props => {
    return(
        <img className='post-image' src={props.image} alt='post image'/>
    )
}
export default PostImage;