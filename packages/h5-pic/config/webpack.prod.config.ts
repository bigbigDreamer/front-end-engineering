import { merge } from 'webpack-merge';
import baseConfig from './webpack.base.config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';

const smp = new SpeedMeasurePlugin();

export default smp.wrap(merge(baseConfig, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}));
