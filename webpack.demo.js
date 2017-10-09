const path = require('path')
const merge = require('webpack-merge')
const node_externals = require('webpack-node-externals')
const util = require('util')

const config = merge(require('./webpack.config.js'), {
    entry: {
        app: ['./demo.jsx']
    },
    devtool: "source-map",
})

console.log(util.inspect(config, false, null))
module.exports = config
