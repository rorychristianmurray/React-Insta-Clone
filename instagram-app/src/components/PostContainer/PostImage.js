import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

class PostImage extends React.Component {
    state = {
        likes: this.props.likes,
        liked: false
    }

    componentDidMount() {
        this.setState({comments: this.props.likes})
    }
    
    toggleLike = () => {
        this.setState({
            liked: !this.state.liked
        })
    }

    incrementLike = event => {
        event.preventDefault();

        if(this.state.liked) {
            return this.setState({
                likes: this.state.likes - 1,
                liked: !this.state.liked
            })
        }

        this.setState({
            likes: this.state.likes - 1,
            liked: !this.state.liked
        })

        this.setState({
            ...this.state,
            likes: this.state.likes + 1
        });
    }
    
    
    render() {
        return(
            <div onClick={this.incrementLike}>
            <img className='post-image' src={this.props.image} ref='post image'/>
            <div>FRANDZ: {this.state.likes}</div>
            <div id="post-icons">
            <FontAwesomeIcon icon={faComment} className="far fa-comment" />
            {this.state.liked ? <FontAwesomeIcon icon={faHeart} onClick={this.toggleLike} className="fas fa-heart" />  : <FontAwesomeIcon icon={faHeartFilled} onClick={this.toggleLike} className="far fa-heart" />}

            </div>
            </div>
            )
        }
    }
    export default PostImage;