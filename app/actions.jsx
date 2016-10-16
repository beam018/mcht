import dispatcher from './dispatcher.jsx';

export const getData = () => dispatcher.dispatch({
    type: 'GET_DATA'
});

export const commentShowForm = (payload) => dispatcher.dispatch({
    type: 'COMMENT_SHOW_FORM',
    payload
});

export const commetRemove = (payload) => dispatcher.dispatch({
    type: 'COMMENT_REMOVE',
    payload
});

export const commentAdd = (payload) => dispatcher.dispatch({
    type: 'COMMENT_ADD',
    payload
});