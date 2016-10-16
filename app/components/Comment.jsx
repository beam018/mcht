import React, { Component, PropTypes } from 'react';

import moment from 'moment';

import { commentShowForm, commetRemove } from '../actions.jsx';

import CommentsList from './CommentsList.jsx';
import CommentForm from './CommentForm.jsx';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            relativeTime: moment(this.props.time).fromNow()
        };

        this._interval = null;
    }

    componentDidMount() {
        const props = this.props;

        this._interval = setInterval(() => {
            this.setState({
                relativeTime: moment(this.props.time).fromNow()
            });
        }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.relativeTime === this.state.relativeTime && nextProps === this.props) {
            return false;
        }

        return true;
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }

    _onAnswerClick(e) {
        const { formOnComment, id } = this.props;

        e.preventDefault();

        commentShowForm(formOnComment !== id ? id : null);
    }

    _onRemoveClick(e) {
        e.preventDefault();

        commentShowForm(null);

        commetRemove(this.props.id);
    }

    _onEditClick(e) {
        e.preventDefault();

        commentShowForm(null);
    }

    render() {
        const { props, state } = this;
        const nestedComments = props.nestingLimit && props.replays.length
            ? <CommentsList
                comments={props.replays}
                nestingLimit={props.nestingLimit}
                formOnComment={props.formOnComment}/>
            : null;

        const controls = [
            props.nestingLimit !== 0
                ? <a href='#' className='comment-controls-item comment-controls-answer'
                    onClick={this._onAnswerClick.bind(this)}
                    key={0}>Answer</a>
                : null,
            // props.own
            //     ? <a href='#' className='comment-controls-item comment-controls-edit'
            //         onClick={this._onEditClick.bind(this)}
            //         key={1}>Edit</a>
            //     : null,
            props.own
                ? <a href='#' className='comment-controls-item comment-controls-remove'
                    onClick={this._onRemoveClick.bind(this)}
                    key={2}>Remove</a>
                : null
        ];

        const commentForm = props.formOnComment === props.id
            ? <CommentForm parent={props.id}/>
            : null;

        return (
            <li className='comment'>
                <img width='32' height='32' src={this.props.avatar} className='comment-avatar' />

                <div className='comment-name'>{props.name}</div>
                <div className='comment-time'>{state.relativeTime}</div>
                <pre className='comment-text'>{props.text}</pre>

                <div className='comment-controls'>
                    {controls}
                </div>

                {commentForm}

                {nestedComments}
            </li>
        );
    }
};

Comment.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.number,
    text: PropTypes.string,
    replays: PropTypes.array,
    own: PropTypes.bool
};

Comment.defaultProps = {
    id: null,
    avatar: '',
    name: '',
    time: 0,
    text: '',
    replays: [],
    own: false
};

export default Comment;
