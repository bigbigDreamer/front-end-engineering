import webpack, { Configuration } from 'webpack';
import { resolve } from 'path';

export default {
    entry: {
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[name].js',
        library: "[name]_[hash]",
        path: resolve(__dirname, '../dll')
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            path: resolve(__dirname, '../dll', "manifest.json"),
            name: '[name]_[hash]'
        }),
    ]
} as Configuration;
