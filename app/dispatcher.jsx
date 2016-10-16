import { Dispatcher } from 'flux';

import { remove, escape } from 'lodash';

import data from './data.jsx';
import store from './store.jsx';

import { comment, chance } from './data.jsx'

const dispatcher = new Dispatcher();

function emulateNetwork(cb, delta) {
    setTimeout(cb, delta || 600);
}

function removeComment(id, collection) {
    remove(collection, (item) => {
        if (item.id === id) {
            return true;
        }

        removeComment(id, item.replays);

        return false;
    });
}

function addComment(collection, text, parent) {
    const _comment = {
        ...comment,
        id: chance.integer(),
        time: Date.now(),
        text: escape(text),
        replays: []
    };

    if (!parent) {
        return collection.push(_comment);
    }

    for (var i = 0; i < collection.length; i++) {
        const item = collection[i];

        if (item.id !== parent) {
            addComment(item.replays, text, parent);
            continue;
        }

        item.replays.push(_comment);
    }
}

dispatcher.register((action) => {
    switch(action.type) {
        case 'GET_DATA':
            // emulate network
            emulateNetwork(() => {
                if (!store.isInited()) {
                    store.data.inited = true;
                }

                store.emit('change');
            });

            break;

        case 'COMMENT_SHOW_FORM':
            store.data.formOnComment = action.payload || null;

            store.emit('change', false);

            break;

        case 'COMMENT_REMOVE':
            removeComment(action.payload, store.data.comments);

            store.emit('change');

            break;

        case 'COMMENT_ADD':
            const { text, parent } = action.payload;

            addComment(store.data.comments, text, parent);

            store.emit('change');

            break;

        default:
            ;
    }
});

export default dispatcher;