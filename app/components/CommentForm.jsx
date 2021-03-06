import React, { Component, PropTypes } from 'react';

import store from '../store.jsx';

import { commentAdd, commentShowForm } from '../actions.jsx';

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text || '',
            disabled: false,
            beforeLimit: props.textLimit
        };
    }

    componentWillMount() {
        store.on('comment:add', this._onCommentAdd.bind(this));
    }

    componentWillUnmount() {
        store.removeListener('comment:add', this._onCommentAdd.bind(this));
    }

    submitForm() {
        commentAdd({
            text: this.state.text.trim(),
            parent: this.props.parent
        });

        this.setState({ disabled: true });

        commentShowForm(null);
    }

    _onCommentAdd() {
        this.setState({
            text: '',
            disabled: false
        });
    }

    _onSubmit(e) {
        e.preventDefault();

        this.submitForm();
    }

    _onAreaChange(e) {
        const beforeLimit = this.props.textLimit - e.target.value.length;

        if (beforeLimit < 0) {
            return;
        }

        this.setState({
            text: e.target.value,
            beforeLimit
        });
    }

    _onAreaKeyPress(e) {
        if (e.key === 'Enter' && e.shiftKey) {
            this.submitForm();
        }

        if (e.key === 'Enter' && !this.state.text.length) {
            e.preventDefault();
        }
    }

    render() {
        const labelText = !this.props.parent
            ? 'Leave comment:'
            : null;

        const disableForm = this.props.disabled || this.state.disabled;

        return (
            <form className='comment-form' onSubmit={this._onSubmit.bind(this)}>
                <label className='comment-area-label'>
                    {labelText}
                    <textarea
                        className='comment-area'
                        disabled={disableForm}
                        onChange={this._onAreaChange.bind(this)}
                        onKeyPress={this._onAreaKeyPress.bind(this)}
                        value={this.state.text}>
                    </textarea>
                </label>

                <span className='comment-counter'>{this.state.beforeLimit}</span>
                <button className='comment-submit' disabled={disableForm || !this.state.text.length}>Send</button>
            </form>
        );
    }
}

CommentForm.propTypes = {
    disabled: PropTypes.bool,
    parent: PropTypes.number,
    text: PropTypes.string,
    textLimit: PropTypes.number
};

CommentForm.defaultProps = {
    disabled: false,
    parent: null,
    text: '',
    textLimit: 300
};

export default CommentForm;
