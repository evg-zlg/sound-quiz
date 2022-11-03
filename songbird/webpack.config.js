const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    clean: true,
    assetModuleFilename: './assets/[name].[contenthash][ext][query]',
    path: path.resolve(__dirname, 'dist'),
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
    watchFiles: ['src/*.html'],
  },
  module: {
    rules: [
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
        use: ["style-loader", "css-loader", "postcss-loader"],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],
};