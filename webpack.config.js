const path = require('path')
const Visualizer = require('webpack-visualizer-plugin')

module.exports = {
    target: 'web',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        library: 'SelectCurrency',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    plugins: [
        new Visualizer(),
    ],
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                include: [
                    path.resolve(__dirname, '.'),
                ],
                exclude: new RegExp('node_modules/'),
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    },
                },
            },
        ],
    },
}
