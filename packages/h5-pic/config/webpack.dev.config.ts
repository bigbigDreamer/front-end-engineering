import { merge } from 'webpack-merge';
import webpack, { Configuration } from 'webpack';
import { resolve } from 'path';
import baseConfig from './webpack.base.config';

export default merge(baseConfig, {
    mode: 'development',
    devServer: {
        host: '127.0.0.1',
        open: true,
        hot: true,
        compress: true,
        static: {
            directory: resolve(__dirname, "../dist")
        },
        // devMiddleware: {
        //     index: true,
        //     writeToDisk: true
        // }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
} as Configuration)
