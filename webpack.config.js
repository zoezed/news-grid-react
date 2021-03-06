var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: ['babel-polyfill', './app/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.(js)$/, exclude: /(node_modules)/, use: 'babel-loader'},
            {test: /\.(css)$/, use: ['style-loader', 'css-loader']},
            //{test: /\.svg$/, use: 'file-loader?name=[name].[ext]&outputPath=images' }
        ]
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',  
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};

module.exports = config;