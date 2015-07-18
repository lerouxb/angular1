var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js"],
    modulesDirectories: ["node_modules"]
  },
  entry: {
    app: "./app/bootstrap.js",
    //style: "./src/css/style.less", // uncomment for no js to be included. why?
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
      { test: /\.html$/, loader: 'raw'}
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ]
}
