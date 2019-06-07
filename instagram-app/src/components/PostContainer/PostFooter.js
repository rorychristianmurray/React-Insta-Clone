import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

class PostFooter extends React.Component {
    state = {
        likes: this.props.likes,
        liked: false
    }

    componentDidMount() {
        this.setState({likes: this.props.likes})
    }
componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
        this.setState({likes: this.props.likes})

    }

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
            likes: this.state.likes + 1,
            liked: !this.state.liked
        })
    }
    
    
    render() {
        return(
            <div className="post-icons" onClick={this.incrementLike}>
            <FontAwesomeIcon icon={faComment} className="post-icon" size="2x"/>
            {this.state.liked ? <FontAwesomeIcon icon={faHeartFilled} onClick={this.incrementLike} className="post-icon" size="2x" />  : <FontAwesomeIcon icon={faHeart} onClick={this.incrementLike} className="post-icon" size="2x" /> }
            <div className="frandz">FRANDZ: {this.state.likes}</div>
            </div>
            )
        }
    }
    export default PostFooter;
