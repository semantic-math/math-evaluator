const path = require('path');

module.exports = {
    entry: "./lib/evaluate.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "math-evaluator.js",
        libraryTarget: "commonjs2"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    }
}