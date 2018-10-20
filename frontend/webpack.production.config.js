const path = require('path');

const ExtractTextPlugin = require("mini-css-extract-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "style.css",
    disable: process.env.NODE_ENV === "development"
});

const config = {
    entry: {
        frontend: [
            "./frontend/src/index.tsx"
        ],
    },
    mode: "production",
    devtool: "sourcemap",
    resolve: {
        extensions: ['*', '.js', '.ts', '.tsx', '.scss'],
        modules: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "../node_modules"),
            path.resolve(__dirname, "../shared/src")
        ]
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /.s?css$/,
                use: [
                    ExtractTextPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    output: {
        filename: "script.js",
        path: __dirname + "/public/"
    },
    plugins: [
        extractSass
    ]
};

module.exports = config;
