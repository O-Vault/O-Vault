const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  mode:'development',
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/@fontsource')],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(tsx|ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  devServer: {
    port:3000
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve:{
    extensions: [".tsx",".ts",".jsx",".js",".json"],
    alias: {
      "@": path.resolve(process.cwd(), 'src/'),
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000 
} ,
  plugins: [new HtmlWebpackPlugin({ 
    template: './src/index.html'
  })]
};