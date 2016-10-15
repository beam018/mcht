import React, { Component, PropTypes } from 'react';
import Comment from './Comment.jsx';

class CommentsList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // react to recived data
    }

    render() {
        const limit = this.props.nestingLimit > 0
            ? this.props.nestingLimit - 1
            : 0;

        if (!this.props.comments || this.props.comments.length === 0) {
            return (
                <div>No comments yet.</div>
            );
        }

        return (
            <ul className='comments-list'>
                {this.props.comments.map((item, i) => {
                    return <Comment key={i} {...item} nestingLimit={limit}/>
                })}
            </ul>
        );
    }
};

CommentsList.propTypes = {
    // comments: PropTypes.arrayOf(React.PropTypes.instanceOf(Comment))
    comments: PropTypes.array,
    nestingLimit: PropTypes.number
};

CommentsList.defaultProps = {
    comments: [],
    nestingLimit: 3
};

export default CommentsList;
