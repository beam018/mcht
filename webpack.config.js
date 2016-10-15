var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname + '/components/App.jsx')
    ],
    output: {
        path: path.resolve(__dirname + '/bundle/'),
        filename: 'scripts.js'
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            }
        ]
    }
};
