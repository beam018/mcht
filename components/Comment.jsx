import React, { Component, PropTypes } from 'react';
import CommentsList from './CommentsList.jsx';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props

        return (
            <li className='comment'>
                <img width='32' height='32' src={this.props.avatar} className='comment-avatar' />

                <div className='comment-name'>{props.name}</div>
                <div className='comment-time'>{props.time}</div>
                <div className='comment-text'>{props.text}</div>

                {(() => {
                    if (props.nestingLimit) {
                        return <CommentsList comments={props.replays} nestingLimit={props.nestingLimit}/>
                    }
                })()}
            </li>
        );
    }
};

Comment.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.number,
    text: PropTypes.string,
    replays: PropTypes.array
};

Comment.defaultProps = {
    avatar: '',
    name: '',
    time: 0,
    text: '',
    replays: []
};

export default Comment;
