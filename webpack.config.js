const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        'app.module.ng1': './app/app.module.ng1',
        'app.config': './app/app.config',
        'app.animations': './app/app.animations',
        'phone.module': './app/core/phone/phone.module',
        'core.module': './app/core/core.module',
        'phone-list.module': './app/phone-list/phone-list.module',
        'phone-detail.module': './app/phone-detail/phone-detail.module',
        main: './app/main',
    },
    // devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    module: {
        rules: [
            { test: /\.ts$/, exclude: /node_modules/, loader: 'awesome-typescript-loader' },
            { test: /\.html$/, loader: 'raw' , exclude: /node_modules/},
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            mangle: true,
            beautify: false,
            comments: false,
            sourceMap: false,
        }),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;
