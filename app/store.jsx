import EventEmitter from 'events';
import Chance from 'chance';

import Dispatcher from './dispatcher.jsx';

const chance = new Chance();

const _data = [
    {
        avatar: chance.avatar(),
        name: chance.name(),
        time: chance.timestamp(),
        text: chance.sentence(),
        replays: [
                {
                avatar: chance.avatar(),
                name: chance.name(),
                time: chance.timestamp(),
                text: chance.sentence(),
                replays: []
            },
            {
                avatar: chance.avatar(),
                name: chance.name(),
                time: chance.timestamp(),
                text: chance.sentence(),
                replays: []
            }
        ]
    },
    {
        avatar: chance.avatar(),
        name: chance.name(),
        time: chance.timestamp(),
        text: chance.sentence(),
        replays: []
    },
    {
        avatar: chance.avatar(),
        name: chance.name(),
        time: chance.timestamp(),
        text: chance.sentence(),
        replays: [
            {
                avatar: chance.avatar(),
                name: chance.name(),
                time: chance.timestamp(),
                text: chance.sentence(),
                replays: [
                    {
                        avatar: chance.avatar(),
                        name: chance.name(),
                        time: chance.timestamp(),
                        text: chance.sentence(),
                        replays: []
                    },
                    {
                        avatar: chance.avatar(),
                        name: chance.name(),
                        time: chance.timestamp(),
                        text: chance.sentence(),
                        replays: [
                            {
                                avatar: chance.avatar(),
                                name: chance.name(),
                                time: chance.timestamp(),
                                text: chance.sentence(),
                                replays: []
                            },
                            {
                                avatar: chance.avatar(),
                                name: chance.name(),
                                time: chance.timestamp(),
                                text: chance.sentence(),
                                replays: []
                            }
                        ]
                    }
                ]
            },
            {
                avatar: chance.avatar(),
                name: chance.name(),
                time: chance.timestamp(),
                text: chance.sentence(),
                replays: []
            },
            {
                avatar: chance.avatar(),
                name: chance.name(),
                time: chance.timestamp(),
                text: chance.sentence(),
                replays: []
            }
        ]
    }
];

class Store extends EventEmitter {
    constructor() {
        super(arguments);

        this.inited = false;
    }

    getData() {
        if (!this.inited) {
            return [];
        }

        return _data;
    }
};

const store = new Store();

Dispatcher.register((action) => {
    switch(action.type) {
        case 'GET_DATA':
            // emulate network
            setTimeout(() => {
                if (!store.inited) {
                    store.emit('init');

                    store.inited = true;
                }

                store.emit('change');
            });

            break;

        default:
            ;
    }
});

export default store;