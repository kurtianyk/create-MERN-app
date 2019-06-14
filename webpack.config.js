const path = require('path');
const Autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const dotenv = require('dotenv-safe');

module.exports = (env, argv) => {
  dotenv.config();

  const outputDirectory = 'dist';
  const isProduction = argv && argv.mode && argv.mode === 'production';

  const APP_PORT = process.env.APP_PORT || 3001;
  const APP_HOST = process.env.APP_HOST || 'localhost';

  return  {
    entry: './client/index.js',
    output: {
      filename: isProduction ? '[name].[chunkhash].js' : '[name].[hash].js',
      // chunkFilename: isProduction ? 'vendor.[chunkhash].js' : 'vendor.[hash].js',
      path: `${__dirname}/${outputDirectory}`,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            { loader: 'css-loader', options: { minimize: true } },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => {
                  const plugins = [Autoprefixer()];
                  if (isProduction) plugins.push(cssnano());
                  return plugins;
                },
              }
            },
            'sass-loader',
          ],
        },
        {
          type: 'javascript/auto',
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000',
        },
      ],
    },
    resolve: {
      modules: ['node_modules'],
      alias: {
        Containers: path.resolve(__dirname, 'client/containers'),
        Layout: path.resolve(__dirname, 'client/components/layout'),
        Common: path.resolve(__dirname, 'client/components/common'),
        Form: path.resolve(__dirname, 'client/components/form'),
        Services: path.resolve(__dirname, 'client/services'),
        Utils: path.resolve(__dirname, 'client/utils'),
      },
      extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
      watch: true,
      node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: './client/index.html' }),
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProduction ? '[id].[hash].css' : '[id].css',
      }),
      new CopyWebpackPlugin([
        {
          from: './client/assets/',
          to: 'client/assets',
        },
      ]),
    ],
    optimization: {
      minimizer: [new TerserPlugin()],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            enforce: true,
          },
        },
      },
    },
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: `http://${APP_HOST}:${APP_PORT}`,
          secure: false
        }
      }
    },
  };
};
