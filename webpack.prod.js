const path = require('path')
const merge = require('webpack-merge')
const node_externals = require('webpack-node-externals')
const util = require('util')

const config = merge(require('./webpack.config.js'), {
    entry: {
        app: ['./src/index.jsx']
    },
    devtool: "source-map",
    externals: [node_externals(),]
})

console.log(util.inspect(config, false, null))
module.exports = config
