import React from 'react';
import './PostContainer.scss'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

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

PostContainer.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    username: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired,
                })
                )
        })
    )
}

export default PostContainer; 