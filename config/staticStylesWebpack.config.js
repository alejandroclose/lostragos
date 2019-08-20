var WebpackOnBuildPlugin = require('on-build-webpack');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"),

    path = require('path'),
    webpack = require('webpack'),
    glob = require("glob"),
    TerserPlugin = require('terser-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
// the path(s) that should be cleaned
let pathsToClean = [
    'docs/*.*'
]
const buildDir = './build/static/css/';

let productionMode = true;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    let productionMode = false;
}

// the clean options to use
let cleanOptions = {
    root:     __dirname,
    verbose:  true,
    watch: true,
    beforeEmit: true
}

let entries = glob.sync('./src/**/!(*Styles).js');

console.log(entries)
module.exports = {
    entry: {
        //main: entries,
        //home: './src/home.js',
        BaseStyles: './src/shared/styles/index.js',
        //view: './src/views/index.js'
    },
    output: {
        path: path.resolve(buildDir),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]',
                            importLoaders: 1,
                            minimize: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({}),
                                require('cssnano')({ preset: 'default' })
                            ],
                            minimize: true
                        }
                    },
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                handlebarsLoader: {}
            }
        }),
        new WebpackOnBuildPlugin(function(stats) {
            const newlyCreatedAssets = stats.compilation.assets;

            const unlinked = [];
            fs.readdir(path.resolve(buildDir), (err, files) => {
                files.forEach(file => {
                    var regex = RegExp('.css');
                    if(!regex.test(file)) {
                        console.log('***', buildDir + file);
                        let path =
                        fs.unlink(buildDir + file, (err) => {
                            if (err) throw err;
                            console.log('path/file.txt was deleted');
                        });
                        unlinked.push(file);
                    }
                });
                if (unlinked.length > 0) {
                    console.log('Removed old assets: ', unlinked);
                }
            });
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        //comments: !productionMode,
                        comments: false,
                    },
                },
            }),
        ],
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    reuseExistingChunk: true,
                    test: /[\\/]node_modules[\\/]/,
                }
            },
        },
    },
    devServer: {
        //publicPath: path.join(__dirname, 'docs/'),
        contentBase: path.join(__dirname, 'docs'),
        compress: false,
        port: 3001,
        //https: true,
        watchContentBase: true,
        writeToDisk: !productionMode
    }
};