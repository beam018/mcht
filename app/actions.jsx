import dispatcher from './dispatcher.jsx';

export const getData = () => dispatcher.dispatch({
    type: 'GET_DATA'
});

export const commentToggleForm = (payload) => dispatcher.dispatch({
    type: 'COMMENT_TOGGLE_FORM',
    payload
});

export const commetRemove = (payload) => dispatcher.dispatch({
    type: 'COMMENT_REMOVE',
    payload
});