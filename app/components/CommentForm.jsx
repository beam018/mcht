import React, { Component, PropTypes } from 'react';

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

CommentForm.propTypes = {
    disabled: PropTypes.bool
};

CommentForm.defaultProps = {
    disabled: null
};

export default CommentForm;
