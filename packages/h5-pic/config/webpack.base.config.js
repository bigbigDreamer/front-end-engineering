"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var webpack_1 = __importDefault(require("webpack"));
var path_1 = require("path");
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var clean_webpack_plugin_1 = require("clean-webpack-plugin");
var add_asset_html_webpack_plugin_1 = __importDefault(require("add-asset-html-webpack-plugin"));
// @ts-ignore
exports["default"] = {
    entry: (0, path_1.resolve)(__dirname, '../src/main.tsx'),
    output: {
        path: (0, path_1.resolve)(__dirname, '../dist'),
        filename: '[name].h5.bundle.[hash].js'
    },
    plugins: [
        new html_webpack_plugin_1["default"]({
            template: (0, path_1.resolve)(__dirname, '../template/index.ejs')
        }),
        new clean_webpack_plugin_1.CleanWebpackPlugin({}),
        new webpack_1["default"].DllReferencePlugin({
            // @ts-ignore
            manifest: (0, path_1.resolve)(__dirname, '../dll/manifest.json'),
            context: __dirname
        }),
        new add_asset_html_webpack_plugin_1["default"]({
            filepath: (0, path_1.resolve)(__dirname, '../dll/vendor.js'),
            publicPath: './'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                sideEffects: true
            },
            {
                test: /\.(png|jpg|jpeg|svg|webp)/,
                type: 'javascript/auto',
                exclude: /node_modules/,
                sideEffects: true,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    optimization: {
        minimize: true,
        sideEffects: true,
        splitChunks: {
            cacheGroups: {
                // vendor: {
                //     test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                //     name: 'vendor',
                //     chunks: 'all',
                //     priority: 10,
                // },
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'common',
                    priority: 9
                }
            }
        }
    }
};
