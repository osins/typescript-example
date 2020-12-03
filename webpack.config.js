const path = require('path')
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js', // <-- Important
        libraryTarget: 'this' // <-- Important
    },
    target: 'node', // <-- Important
    module: {
        rules: [  // 添加解析规则
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true
                },
            },
        ]
    },
    resolve: {   // 需要打包的文件后缀
        extensions: [".tsx", ".ts", ".js"]
    },
    externals: [nodeExternals()] // <-- Important
}　　