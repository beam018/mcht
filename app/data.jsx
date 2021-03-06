import Chance from 'chance';

export const chance = new Chance();

export const basic = {
    inited: false,
    formOnComment: null,
    nestingLimit: 3,
    comments: []
};

export const comment = {
    id: chance.integer(),
    avatar: chance.avatar(),
    name: 'Your name',
    time: 0,
    text: '',
    own: true,
    replays: []
}

const data = {
    ...basic,
    comments: [
        {
            id: chance.integer(),
            avatar: chance.avatar(),
            name: 'Your name',
            time: 1476626889634,
            text: chance.paragraph(),
            own: true,
            replays: [
                {
                    id: chance.integer(),
                    avatar: chance.avatar(),
                    name: chance.name(),
                    time: chance.timestamp(),
                    text: chance.sentence(),
                    replays: []
                },
                {
                    id: chance.integer(),
                    avatar: chance.avatar(),
                    name: 'Your name',
                    time: chance.timestamp(),
                    text: chance.sentence(),
                    replays: [],
                    own: true
                }
            ]
        }
    ]
};

export default data;