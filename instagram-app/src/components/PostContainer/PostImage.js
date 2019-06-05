import React from 'react';

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
            <img className='post-image' src={this.props.image} ref='post image'/>
            // <div id="post-icons">
            //     <i className="comment-icon"></i>
            //     {this.state.liked ? <p onClick={this.toggleLike}>put red heart icon here </p> : <i onClick={this.toggleLike} className="heart-icon"></i>}
            
            // </div>
            )
            
        }
    }
    export default PostImage;

    
                        // const PostImage = props => {
                        //     return(
                        //         <img className='post-image' src={this.props.image} ref='post image'/>
                        
                        //     )
                        
                        // }