const webpack           = require('webpack')
const path              = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    devtool: 'source-source-map',
    debug:   true,
    entry:   {
        'solarized-dark': './src/solarized-dark/theme.js',
        'night-blue':     './src/night-blue/theme.js',
        sunny:            './src/sunny/theme.js',
        wine:             './src/wine/theme.js',
        snow:             './src/snow/theme.js',
    },
    output:  {
        path:         'themes',
        filename:     '[name].js',
        library:      'mozaik-themes',
        libraryTarget:'umd',
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [
            {
                test:   /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]_solarized_dark_[hash:base64:5]'
                ),
            },
            {
                test:    /\.js$/,
                loaders: [
                    'babel'
                ]
            }
        ]
    },
    externals: {
    },
    resolve: {
        extensions: [
            '',
            '.js',
        ],
    },
}
