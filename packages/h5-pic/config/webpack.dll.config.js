"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var webpack_1 = __importDefault(require("webpack"));
var path_1 = require("path");
exports["default"] = {
    entry: {
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[name].js',
        library: "[name]_[hash]",
        path: (0, path_1.resolve)(__dirname, '../dll')
    },
    plugins: [
        new webpack_1["default"].DllPlugin({
            context: __dirname,
            path: (0, path_1.resolve)(__dirname, '../dll', "manifest.json"),
            name: '[name]_[hash]'
        }),
    ]
};
