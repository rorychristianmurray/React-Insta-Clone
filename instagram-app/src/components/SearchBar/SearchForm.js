import React from 'react';

class SearchForm extends React.Component {
    state = {
        comment: ''
    }


    // Moved to CommentSection
    // handleChanges = event => {
    //     console.log(event.target.value);

    //     // save comment on state

    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // };

    // addComment = event => {
    //     event.preventDefault();
    //     this.props.addComment(this.state.comment)
    //     this.setState({comment: ''})
    // }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.addComment} className = 'comment-form'>
                <input
                    placeholder="prettyyyy... pretty good"
                    onChange={this.handleChanges}
                    value={this.state.addComment}
                    name="comment"
                    />
                <button className="btn">Add Comment</button>
                </form>
            </div>
        );
    }
}

export default SearchForm;