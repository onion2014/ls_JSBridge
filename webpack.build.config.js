var path = require('path');

const config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'loveshow-JSBridge.js',
        path: path.resolve(__dirname, 'dist')
    }
};

module.exports = config;