const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        frontend: [
            "./frontend/src/index.tsx"
        ],
    },
    mode: "development",
    devtool: "sourcemap",
    resolve: {
        extensions: ['*', '.js', '.ts', '.tsx', '.scss'],
        modules: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "../node_modules"),
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.s?css$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    output: {
        filename: "script.js",
        path: __dirname + "/frontend/public/"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './frontend/public/',
        hot: true,
        port: 8080,
    }
};

module.exports = config;
