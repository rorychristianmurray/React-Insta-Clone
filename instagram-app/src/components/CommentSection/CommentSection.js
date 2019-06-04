import React from 'react';
import './CommentSection.scss';
import SearchForm from '../SearchBar/SearchForm'

const CommentSection = props => {
    console.log('CommentSection props', props);
    return (
        <div className="container">
        <div className="row">
            <div className="col comment">{props.comment.text}</div>
            <div><SearchForm /></div>
        </div>
        </div>

    );

}

export default CommentSection;