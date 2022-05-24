// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/test1.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-cheap-module-source-map',
};