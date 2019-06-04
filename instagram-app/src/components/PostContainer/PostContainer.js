import React from 'react';
import './PostContainer.scss';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import PostImage from './PostImage';




class PostContainer extends React.Component {
    constructor(props) {
        super(props)
    }


    
    render() {
        console.log('PostContainer props', this.props)
        return (
            <div className="post-container">
                <PostHeader profileThumbnail={this.props.post.thumbnailUrl} username={this.props.post.username} />
                <PostImage image={this.props.post.imageUrl} />
                <CommentSection comments={this.props.post.comments} />
            </div>
    
        );
    }
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