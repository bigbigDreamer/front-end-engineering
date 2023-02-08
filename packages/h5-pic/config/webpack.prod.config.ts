import { merge } from 'webpack-merge';
import baseConfig from './webpack.base.config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default merge(baseConfig, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})
