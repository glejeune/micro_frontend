const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const enableBundleAnalyzer = process.env.ENABLE_ANALYZER === 'true';

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    realtime: path.resolve(__dirname, "app/assets/js", "index.js"),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'app/public/ui/seo_service/js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env", "react", "stage-0"]
            }
          }
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]_[hash:7].[ext]',
            }
          },
        ]
      },
      {
        test: /.*\.(gif|png|jp(e*)g)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'app/public/ui/seo_service/js')], {
      root: process.cwd(),
      verbose: true,
      dry: false
    }),
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
    }),
    new ManifestPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: enableBundleAnalyzer === true ? 'static' : 'disabled',
      openAnalyzer: true,
    }),
  ],
};
