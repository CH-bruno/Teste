import { resolve as _resolve, join } from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const plugins = [new ForkTsCheckerWebpackPlugin()];
export const entry = './src/index.tsx';
export const output = {
  filename: 'bundle.js',
  path: _resolve(__dirname, 'dist'),
  publicPath: '/'
};
export const resolve = {
  extensions: ['.ts', '.tsx', '.js']
};
export const module = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }
  ]
};
export const devServer = {
  static: join(__dirname, 'public'),
  compress: true,
  port: 9000
};
