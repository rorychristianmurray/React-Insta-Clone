import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';

class PostImage extends React.Component {
    state = {
        liked: false
    }

    toggleLike = () => {
        this.setState({
            liked: !this.state.liked
        })
    }
    render() {
        return(
            <div>
            <img className='post-image' src={this.props.image} ref='post image'/>
            <div id="post-icons">
            <i className="far fa-comment"></i>
            {this.state.liked ? <FontAwesomeIcon icon={faHeart} onClick={this.toggleLike} className="fas fa-heart" />  : <FontAwesomeIcon icon={faHeartFilled} onClick={this.toggleLike} className="far fa-heart" />}
            </div>
            </div>
            )
        }
    }
    export default PostImage;


                        // const PostImage = props => {
                        //     return(
                        //         <img className='post-image' src={this.props.image} ref='post image'/>
                        
                        //     )
                        
                        // }