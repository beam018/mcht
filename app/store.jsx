import EventEmitter from 'events';
import Chance from 'chance';

const chance = new Chance();

const _data = [
    {
        avatar: chance.avatar(),
        name: chance.name(),
        time: 1476618917764,
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
                replays: [],
                own: true
            }
        ]
    }
];

class Store extends EventEmitter {
    constructor() {
        super(arguments);

        this._inited = false;
    }

    init() {
        this._inited = true;
    }

    isInited() {
        return this._inited;
    }

    getData() {
        if (!this._inited) {
            return [];
        }

        return _data;
    }
};

export default new Store();