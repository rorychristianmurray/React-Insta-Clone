import React from 'react';
import './CommentSection.scss';
import Comment from './Comment'

class CommentSection extends React.Component {
        state = {
            comments: [],
            id: '',
            username: 'raursaurus',
            text: '',
        };

        // console.log('CommentSection this.state', state);
            
    componentDidMount() {
        this.setState({comments: this.props.comments})
    }

    handleChanges = event => {
        console.log('handleChanges event.target.name', event.target.name);

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addComment = (event, index) => {
        event.preventDefault();
        console.log('addComment event', event);

        const newComment = {
            id: this.state.comments.length + 1,
            username: this.state.username,
            text: this.state.text
        };

        this.setState({
            comments: [...this.state.comments, newComment], // new array with added comment
            id: '',
            username: 'raursaurus',
            text: '',
        });
    };

render() {

    console.log('CommentSection this.props.comments',this.props.comments)
    return (
        <div className="comment-section">
        {this.state.comments.map(comment => {
               return <Comment comment={comment} key={comment.id} /> })}
            <div className="form">
            <form onSubmit={this.addComment} className = 'comment-form'>
                <input
                    placeholder="pretty... pretty good"
                    onChange={this.handleChanges}
                    value={this.state.text}
                    name="text"
                 />  
            <button className="btn">Add Comment</button>
        </form>
        </div> 
        </div>
    )

}
}

export default CommentSection;

