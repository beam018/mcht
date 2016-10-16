import EventEmitter from 'events';
import Chance from 'chance';

import data, { basic } from './data.jsx'

class Store extends EventEmitter {
    constructor(data) {
        super();

        this.data = data;
    }

    isInited() {
        return this.data.inited;
    }

    getData() {
        if (!this.isInited()) {
            return basic;
        }

        return this.data;
    }
};

export default new Store(data);