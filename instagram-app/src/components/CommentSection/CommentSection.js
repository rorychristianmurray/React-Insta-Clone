import React from 'react';
import './CommentSection.scss';
import SearchForm from '../SearchBar/SearchForm'

class CommentSection extends React.Component {
    state = {
        newComment: ''
    }

    handleChanges = event => {
        console.log('form changes',event.target.value);\

        //save comment on state
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addComment = event => {
        event.preventDefault();
        this.props.addComment(this.state.comment)
        this.setState({comment: ''})
    }

    render() {
        console.log('CommentSection props', props);
        
        return(
        <div className="container">
        <div className="row">
            <div className="col comment">{props.comment.text}</div>
            <SearchForm />
        </div>
        </div>
        )
    }

}



export default CommentSection;