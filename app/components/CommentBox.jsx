import React, { Component } from 'react';
import store from '../store.jsx';

import { getData } from '../actions.jsx';

import CommentsList from './CommentsList.jsx';
import CommentForm from './CommentForm.jsx';

function getStoreState() {
    return {...store.getData()};
};

class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = getStoreState();
    }

    componentWillMount() {
        store.on('change', this._onChange.bind(this));
    }

    componentWillUnmount() {
        store.removeListener('change', this._onChange.bind(this));
    }

    componentDidMount() {
        getData();
    }

    _onChange() {
        this.setState(getStoreState());
    }

    render() {
        const content = this.state.inited
            ? <CommentsList
                comments={this.state.comments}
                nestingLimit={this.state.nestingLimit}
                formOnComment={this.state.formOnComment}/>
            : <p>Loading comments...</p>

        const commentForm = !this.state.formOnComment
            ? <CommentForm disabled={!this.state.inited}/>
            : null

        return (
            <div>
                {content}

                {commentForm}
            </div>
        );
    }
};

export default CommentBox;
