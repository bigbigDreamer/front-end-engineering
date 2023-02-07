"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var path_1 = require("path");
// @ts-ignore
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var clean_webpack_plugin_1 = require("clean-webpack-plugin");
exports["default"] = {
    entry: (0, path_1.resolve)(__dirname, '../src/main.tsx'),
    output: {
        path: (0, path_1.resolve)(__dirname, '../dist'),
        filename: 'h5.bundle.[hash].js'
    },
    plugins: [
        new html_webpack_plugin_1["default"]({
            template: (0, path_1.resolve)(__dirname, '../template/index.ejs')
        }),
        new clean_webpack_plugin_1.CleanWebpackPlugin({})
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
};
