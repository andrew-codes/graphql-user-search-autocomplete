const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = 'development';

module.exports = {
    bail: false,
    devtool: 'cheap-eval-source-map',
    entry: './src/client.js',
    output: {
        path: path.join(__dirname, 'build/client'),
        filename: 'bundle.js',
        publicPath: '/static',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader',
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true, // React doesn't support IE8
                warnings: false,
            },
            mangle: {
                screw_ie8: true,
            },
            output: {
                comments: true,
                screw_ie8: true,
            },
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
    ].filter(Boolean),
};
