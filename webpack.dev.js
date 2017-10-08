const path = require('path')
const merge = require('webpack-merge')
const util = require('util')

const config = merge(require('./webpack.config.js'), {
    entry: {
        app: ['./demo/index.jsx'],
    },
    devServer: {
        contentBase: './demo/',
    },
    devtool: "eval-source-map",
})
console.log(util.inspect(config, false, null))
module.exports = config
