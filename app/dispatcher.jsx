import { Dispatcher } from 'flux';

import data from './data.jsx';
import store from './store.jsx';

const dispatcher = new Dispatcher();

function emulateNetwork(cb, delta) {
    setTimeout(cb, delta || 600);
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

        case 'COMMENT_TOGGLE_FORM':
            store.data.formOnComment = action.payload || null;

            store.emit('change');

            break;

        default:
            ;
    }
});

export default dispatcher;