import React from 'react';
import './PostContainer.scss';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PropTypes from 'prop-types';

const PostContainer = props => {


console.log('PostContainer props', props)
return (
    <div className="post-container">
        <PostHeader profileThumbnail={props.post.thumbnailUrl} username={props.post.username} />
        <PostImage image={props.post.imageUrl} likes={props.post.likes} />
        <CommentSection comments={props.post.comments} />
    </div>
);

}


// PostContainer.propTypes = {
//     data: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             username: PropTypes.string.isRequired,
//             thumbnailUrl: PropTypes.string.isRequired,
//             imageUrl: PropTypes.string.isRequired,
//             likes: PropTypes.number.isRequired,
//             timestamp: PropTypes.string.isRequired,
//             comments: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     id: PropTypes.number.isRequired,
//                     username: PropTypes.string.isRequired,
//                     text: PropTypes.string.isRequired,
//                 })
//                 )
//         })
//     )
// }

export default PostContainer; 