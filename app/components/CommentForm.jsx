import React, { Component } from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props);
    }

    _onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form className='comment-form' onSubmit={this._onSubmit.bind(this)}>
                <label className='comment-area-label'>Leave comment:
                    <textarea className='comment-area' {...this.props}></textarea>
                </label>

                <button className='comment-submit' {...this.props}>Send</button>
            </form>
        );
    }
}

export default CommentForm;
