import React, { Component, PropTypes } from 'react';
import Comment from './Comment.jsx';

class CommentsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const limit = this.props.nestingLimit > 0
            ? this.props.nestingLimit - 1
            : 0;

        if (!this.props.comments || this.props.comments.length === 0) {
            return (
                <p>No comments yet.</p>
            );
        }

        return (
            <ul className='comments-list'>
                {this.props.comments.map((item, i) => {
                    return <Comment key={i} {...item} nestingLimit={limit} formOnComment={this.props.formOnComment}/>
                })}
            </ul>
        );
    }
};

CommentsList.propTypes = {
    // comments: PropTypes.arrayOf(React.PropTypes.instanceOf(Comment))
    comments: PropTypes.array,
    nestingLimit: PropTypes.number,
    formOnComment: PropTypes.number
};

CommentsList.defaultProps = {
    comments: [],
    nestingLimit: 3,
    formOnComment: null
};

export default CommentsList;
