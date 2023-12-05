const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './src',
        allowedHosts: 'all',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext][query]'
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new ImageMinWebpWebpackPlugin({
            quality: 75, // Adjust the quality as needed
            overrideExtension: true,
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

