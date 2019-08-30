const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const es3ifyPlugin = require('es3ify-webpack-plugin');

commonConfig = {
    entry: {
        app: [
            path.join(__dirname, 'src/index.js')
        ],
        vendor: [
            'es5-shim',
            'es5-shim/es5-sham',
            'babel-polyfill',
            'es6-promise',
            'react',
            'react-dom',
            'react-redux',
            'react-router-dom'
        ],
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js',
        publicPath: "/"
    },
    module: {
        noParse: /node_modules\/(jquey|moment|chart\.js)/,
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader?cacheDirectory=true'],
                include: [path.resolve(__dirname, './src')],
                // exclude: path => !!path.match(/node_modules|src\/assets/),
            },
            {
                test: /\.(jpe?g|png|gif|bmp|ico)(\?.*)?$/i,
                loader: "url-loader?limit=8048&name=assets/url-img/[name].[hash:5].[ext]",
            },
            {
                test: /\.(woff2?|svg|ttf|otf|eot)(\?.*)?$/i,
                loader: "url-loader?limit=2048&name=font/[name].[hash:5].[ext]",
                exclude: path => !!path.match(/node_modules|src\/assets/),
            }
        ],
        postLoaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['export-from-ie8/loader']
            },
            {
                test: /\.(js|jsx)$/,
                loaders: ['es3ify-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "创视天成OA系统",
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html'),
            minify: {
                collapseWhitespace: true, //把生成的 index.html 文件的内容的没用空格去掉，减少空间
            },
            hash: true, //为了更好的 cache，可以在文件名后加个 hash。
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'runtime',
        //     minChunks: Infinity,
        // }),
        // new CopyWebpackPlugin([
        //     {
        //         from: "src/assets/static",
        //         to: "assets/static",
        //     }
        // ]),
        new es3ifyPlugin()
    ],

    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }
};

module.exports = commonConfig;
