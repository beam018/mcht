import React from 'react';
import ReactDOM from 'react-dom';

import CommentsList from './CommentsList.jsx';

import Chance from 'chance';

const chance = new Chance();
const comments = [
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
]

ReactDOM.render(
    <CommentsList comments={comments} />,
    document.getElementById('app')
);