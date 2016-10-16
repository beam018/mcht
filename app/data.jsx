const chance = new Chance();

export const basic = {
    inited: false,
    formOnComment: null,
    nestingLimit: 3,
    comments: []
};

const data = {
    ...basic,
    comments: [
        {
            id: chance.integer(),
            avatar: chance.avatar(),
            name: chance.name(),
            time: 1476626889634,
            text: chance.sentence(),
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
                    name: chance.name(),
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