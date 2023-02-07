"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var webpack_merge_1 = require("webpack-merge");
var webpack_1 = __importDefault(require("webpack"));
var path_1 = require("path");
var webpack_base_config_1 = __importDefault(require("./webpack.base.config"));
exports["default"] = (0, webpack_merge_1.merge)(webpack_base_config_1["default"], {
    mode: 'development',
    devServer: {
        host: '127.0.0.1',
        open: true,
        hot: true,
        compress: true,
        static: {
            directory: (0, path_1.resolve)(__dirname, "../dist")
        }
    },
    plugins: [
        new webpack_1["default"].HotModuleReplacementPlugin(),
    ]
});
