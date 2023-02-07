import { Configuration } from 'webpack';
import { resolve } from 'path';
// @ts-ignore
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";

export default {
    entry: resolve(__dirname, '../src/main.tsx'),
    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'h5.bundle.[hash].js',
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
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'], // add .tsx, .ts
    },

} as Configuration;
