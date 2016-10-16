import React, { Component, PropTypes } from 'react';
import CommentsList from './CommentsList.jsx';

import moment from 'moment';

function getState(props) {
    return {
        relativeTime: moment(props.time).fromNow()
    };
}

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = getState(this.props);

        this._interval = null;
    }

    componentDidMount() {
        const props = this.props;

        this._interval = setInterval(() => {
            this.setState(getState(props));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }

    render() {
        const { props, state } = this;
        const nestedComments = props.nestingLimit && props.replays.length
            ? <CommentsList comments={props.replays} nestingLimit={props.nestingLimit}/>
            : null;

        const controls = [
            <a href='#' className='comment-controls-item comment-controls-answer'>Answer</a>,
            props.own ? <a href='#' className='comment-controls-item comment-controls-edit'>Edit</a> : null,
            props.own ? <a href='#' className='comment-controls-item comment-controls-remove'>Remove</a> : null
        ];

        return (
            <li className='comment'>
                <img width='32' height='32' src={this.props.avatar} className='comment-avatar' />

                <div className='comment-name'>{props.name}</div>
                <div className='comment-time'>{state.relativeTime}</div>
                <div className='comment-text'>{props.text}</div>

                <div className='comment-controls'>
                    {controls}
                </div>

                {nestedComments}
            </li>
        );
    }
};

Comment.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.number,
    text: PropTypes.string,
    replays: PropTypes.array,
    own: PropTypes.bool
};

Comment.defaultProps = {
    avatar: '',
    name: '',
    time: 0,
    text: '',
    replays: [],
    own: false
};

export default Comment;
