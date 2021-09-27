const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server/bin/www',

    resolve: {
        extensions: [".js", ".jsx"]
    },

    target: 'node',

    externals: [nodeExternals()],

    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.(scss|css|svg|jpg)$/,
                loader: "ignore-loader"
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
    ]
};