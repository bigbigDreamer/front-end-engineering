"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var webpack_merge_1 = require("webpack-merge");
var webpack_base_config_1 = __importDefault(require("./webpack.base.config"));
var webpack_bundle_analyzer_1 = require("webpack-bundle-analyzer");
exports["default"] = (0, webpack_merge_1.merge)(webpack_base_config_1["default"], {
    mode: 'production',
    plugins: [
        new webpack_bundle_analyzer_1.BundleAnalyzerPlugin()
    ]
});
