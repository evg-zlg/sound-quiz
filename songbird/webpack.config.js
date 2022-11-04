const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PugPlugin = require('pug-plugin');

// const CopyPlugin = require("copy-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.pug',
  },
  output: {
    clean: true,
    // assetModuleFilename: './assets/[name].[contenthash][ext][query]',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    // filename: 'assets/js/[name].[contenthash:8].js'
  },
  devServer: {
    // open: true,
    port: 3000,
    hot: false,
    client: {
      overlay: true,
      progress: true,
    },
    liveReload: true,
    watchFiles: ['./src/*.*'],
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        options: {
          method: 'render', 
        }
      },
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]"
        }
      },
      {
        test: /\.(?:mp3|)$/i,
        type: "asset/resource",
        generator: {
          filename: "sounds/[hash][ext][query]"
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ["css-loader", "sass-loader"],
      }
    ]
  },
  plugins: [
    new PugPlugin({
      // pretty: true,
      extractCss: {
        filename: '[name].[contenthash:8].css',
      }
    }),
  //   new HtmlWebpackPlugin({
  //     template: "./src/index.pug"
  //   }),
  ],
};