"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var webpack_merge_1 = require("webpack-merge");
var webpack_base_config_1 = __importDefault(require("./webpack.base.config"));
exports["default"] = (0, webpack_merge_1.merge)(webpack_base_config_1["default"], {
    mode: 'production'
});
