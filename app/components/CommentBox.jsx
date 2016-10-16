import React, { Component } from 'react';
import store from '../store.jsx';

import * as actions from '../actions.jsx';

import CommentsList from './CommentsList.jsx';

class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: store.getData()
        }
    }

    componentWillMount() {
        store.on('init', this._onInit.bind(this));
        store.on('change', this._onChange.bind(this));
    }

    componentWillUnmount() {
        store.removeListener('init');
        store.removeListener('change');
    }

    componentDidMount() {
        actions.getData();
    }

    _onInit() {
        // remove loading effect
    }

    _onChange() {
        this.setState({
            comments: store.getData()
        });
    }

    render() {
        return (
            <div>
                <CommentsList comments={this.state.comments} />
            </div>
        );
    }
}

export default CommentBox;
