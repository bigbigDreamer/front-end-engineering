import { Configuration } from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";

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
        new CleanWebpackPlugin({})
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
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: 10,
                },
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
