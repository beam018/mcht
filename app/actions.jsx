import dispatcher from './dispatcher.jsx';

export const getData = () => dispatcher.dispatch({
    type: 'GET_DATA'
});