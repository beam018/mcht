import React, { Component } from 'react';
import store from '../store.jsx';

import * as actions from '../actions.jsx';

import CommentsList from './CommentsList.jsx';
import CommentForm from './CommentForm.jsx';

function getStoreState() {
    return {
        comments: store.getData(),
        inited: store.isInited()
    };
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
        store.removeListener('change');
    }

    componentDidMount() {
        actions.getData();
    }

    _onChange() {
        this.setState(getStoreState());
    }

    render() {
        const content = this.state.inited
            ? <CommentsList comments={this.state.comments} />
            : <p>Loading comments...</p>

        return (
            <div>
                {content}

                <CommentForm disabled={!this.state.inited}/>
            </div>
        );
    }
};

export default CommentBox;
