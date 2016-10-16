import { Dispatcher } from 'flux';

import store from './store.jsx';

const dispatcher = new Dispatcher();

dispatcher.register((action) => {
    switch(action.type) {
        case 'GET_DATA':
            // emulate network
            setTimeout(() => {
                if (!store.isInited()) {
                    store.init();
                }

                store.emit('change');
            }, 600);

            break;

        default:
            ;
    }
});

export default dispatcher;