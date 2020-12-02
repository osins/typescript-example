const path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.ts'],
        alias: {
            "src": path.resolve('./src')
        }
    }
}