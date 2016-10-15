import React, { Component, PropTypes } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className='comment'>
                <img src={this.props.avatar} className='comment-avatar' />
                <div className='comment-name'>{this.props.name}</div>
                <div className='comment-time'>{this.props.time}</div>
                <div className='comment-text'>{this.props.text}</div>
            </li>
        );
    }
};

Comment.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.number,
    text: PropTypes.string
};

Comment.defaultProps = {
    avatar: '',
    name: '',
    time: 0,
    text: ''
};

export default Comment;
