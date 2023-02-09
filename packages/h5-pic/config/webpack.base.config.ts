import webpack, { Configuration } from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import AddAssetHtmlPlugin from "add-asset-html-webpack-plugin";

// @ts-ignore
export default {
    entry: resolve(__dirname, '../src/main.tsx'),
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].h5.bundle.[hash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../template/index.ejs')
        }),
        new CleanWebpackPlugin({}),
        new webpack.DllReferencePlugin({
            // @ts-ignore
            manifest: resolve(__dirname,'../dll/manifest.json'),
            context: __dirname
        }),
        new AddAssetHtmlPlugin({
            filepath: resolve(__dirname, '../dll/vendor.js'),
            publicPath: './'
        })
],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,    // add |ts
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
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
                                progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'], // add .tsx, .ts
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

} as Configuration;
