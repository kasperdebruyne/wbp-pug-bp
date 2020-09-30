const common = require('./webpack.common')
const {merge} = require('webpack-merge');
const path = require('path')
module.exports = merge(common, {
    mode: "development",
    devServer: {
        publicPath: "/",
        contentBase: "./public/",
        compress: true,
        staticOptions: {
            // need this for proper routing using dev-server --> http://expressjs.com/en/4x/api.html#express.static
            // otherwise you will get a "cannot get /route" error when trying to access any other route besided the root
            extensions: ["html"],
        },
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "./js/[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
});