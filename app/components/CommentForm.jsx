import React, { Component, PropTypes } from 'react';

import { commentAdd, commentShowForm } from '../actions.jsx';

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text || ''
        }
    }

    submitForm() {
        commentAdd({
            text: this.state.text.trim(),
            parent: this.props.parent
        });

        commentShowForm(null);

        this.setState({ text: '' })
    }

    _onSubmit(e) {
        e.preventDefault();

        this.submitForm();
    }

    _onAreaChange(e) {
        this.setState({ text: e.target.value })
    }

    _onAreaKeyPress(e) {
        if (e.key === 'Enter' && e.shiftKey) {
            this.submitForm();
        }
    }

    render() {
        const labelText = !this.props.parent
            ? 'Leave comment:'
            : null

        return (
            <form className='comment-form' onSubmit={this._onSubmit.bind(this)}>
                <label className='comment-area-label'>
                    {labelText}
                    <textarea
                        className='comment-area'
                        disabled={this.props.disabled}
                        onChange={this._onAreaChange.bind(this)}
                        onKeyPress={this._onAreaKeyPress.bind(this)}
                        value={this.state.text}>
                    </textarea>
                </label>

                <button className='comment-submit' disabled={this.props.disabled || !this.state.text.length}>Send</button>
            </form>
        );
    }
}

CommentForm.propTypes = {
    disabled: PropTypes.bool,
    parent: PropTypes.number
};

CommentForm.defaultProps = {
    disabled: false,
    parent: null
};

export default CommentForm;
