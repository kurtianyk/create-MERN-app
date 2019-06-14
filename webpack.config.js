const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Autoprefixer = require('autoprefixer');

module.exports = (env, argv) => {

  const outputDirectory = 'dist';
  const isProduction = argv && argv.mode && argv.mode === 'production';

  return  {
    entry: './client/index.js',
    output: {
      filename: isProduction ? '[name].[chunkhash].js' : '[name].[hash].js',
      chunkFilename: isProduction ? 'vendor.[chunkhash].js' : 'vendor.[hash].js',
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
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { minimize: true } },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [Autoprefixer({
                  browsers: ['> 1%', 'last 2 versions']
                })],
              }
            },
            'sass-loader',
          ],
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
      new CleanWebpackPlugin([outputDirectory]),
      new HtmlWebpackPlugin({ template: './client/index.html' }),
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProduction ? '[id].[hash].css' : '[id].css',
      }),
    ],
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          secure: false
        }
      }
    },
  };
};
